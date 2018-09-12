const express = require('express');
var multer  = require('multer');
var cmd = require('node-cmd');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

const app = express();


app.post('/api/test_upload', upload.single('file'), (req, res) => {
  console.log('file uploaded!');
  cmd.get('./K-Means/K-Means ../uploads/' + req.filename,
        function(err, data, stderr){
            res.json(	{"colors":	{
            		"color0":	"#0B0902",
            		"color1":	"#56667C",
            		"color2":	"#AA9869",
            		"color3":	"#3F2309",
            		"color4":	"#8FB0C6",
            		"color5":	"#252E3C",
            		"color6":	"#0C0D12"
            	}});
         }
     );
});


app.get('/test', (req, res) => {
  cmd.get('./test',
        function(err, data, stderr){
            res.send(data);
         }
     );
});

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
