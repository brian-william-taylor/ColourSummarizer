const express = require('express');
var multer  = require('multer');
var cmd = require('node-cmd');
var path = require('path');
var fs = require('fs');

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

app.post('/api/upload', upload.single('file'), (req, res) => {
  cmd.get('./K-Means/K-Means -j ./uploads/' + req.file.filename,
        function(err, data, stderr){
            var filePath = './uploads/' + req.file.filename;
            fs.access(filePath, error => {
                if (!error) {
                    fs.unlink(filePath,function(error){
                        console.log(error);
                    });
                } else {
                    console.log(error);
                }
            });

            res.json([
            			"#0B0902",
            			"#56667C",
            			"#AA9869",
            			"#3F2309",
            		  "#8FB0C6",
            			"#252E3C",
            			"#0C0D12"
            	]);
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
