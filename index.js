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
