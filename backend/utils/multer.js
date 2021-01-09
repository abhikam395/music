const multer  = require('multer');
const path = require('path');
const fs = require('fs');
const imageDir = '/home/abhishek/projects/react/music/backend/uploads/images';
const songDir = '/home/abhishek/projects/react/music/backend/uploads/songs';

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    let type = file.mimetype.split('/')[0];
    if(type == 'image'){
      if(!fs.existsSync(imageDir))
        fs.mkdirSync(imageDir)
      cb(null, imageDir)
    }
    else if(type == 'audio'){
      if(!fs.existsSync(songDir))
        fs.mkdirSync(songDir)
      cb(null, songDir)
    }
  },
  filename: function(req, file, cb){
    cb(null,Date.now() + path.extname(file.originalname))
  }
});
  
exports.multer = multer({ storage: storage })