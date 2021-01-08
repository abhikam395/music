const multer  = require('multer');
const path = require('path');
const fs = require('fs');
const dir = '/home/abhishek/projects/react/music/backend/uploads/';


var storage = multer.diskStorage({
  destination: function(req, file, cb){
    if(!fs.existsSync(dir))
      fs.mkdirSync(dir)
    cb(null, dir)
  },
  filename: function(req, file, cb){
    cb(null,Date.now() + path.extname(file.originalname))
  }
});
  
exports.multer = multer({ storage: storage })