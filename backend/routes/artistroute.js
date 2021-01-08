const Artist = require('./../models').Artist;
const { multer } = require('./../utils/multer');
 
module.exports = function(app){
    cb = multer.fields([{name: 'name'}, {name: 'dob'}, {name: 'image'}])
    app.post('/api/v1/artists' ,cb , async (req, res) => {
        let { name, dob } = req.body;
        let urlToImage = req.files['image'][0].filename;
        let artist = await Artist.create({
            name: name,
            dob: dob,
            image: urlToImage
        })
        res.json({
            artist: artist
        })
    })
}
