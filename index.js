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
  cmd.get('./K-Means/k-means ./uploads/' + req.file.filename + ' print -j',
        function(err, data, stderr){
            obj = JSON.parse(data);
            console.log(obj.colors.color0); 
            //console.log(req.file.filename);           
            //console.log(data);
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
              obj.colors.color0,
              obj.colors.color1,
              obj.colors.color2,
              obj.colors.color3,
              obj.colors.color4,
              obj.colors.color5,
              obj.colors.color6
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
