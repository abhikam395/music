const Song = require('./../models').Song;
const { multer } = require('./../utils/multer');

module.exports = function(app){
    let cb = multer.fields([{name: 'song'}, {name: 'name'}, {name: 'artistId'}, {name: 'image'}]);
    app.post('/api/v1/songs', cb, async (req, res) => {
        let { name, artistId } = req.body;
        let urlToSong = req.files['song'][0].filename;
        let urlToImage = req.files['image'][0].filename;
        let song = await Song.create({
            name: name,
            urlToSong: urlToSong,
            urlToImage: urlToImage,
            artistId: artistId
        });
        song.save();
        res.json({
            song: song
        })
    })
}