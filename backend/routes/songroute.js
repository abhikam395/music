const Model = require('./../models');
const Song = Model.Song;
const Artist = Model.Artist;
const { multer } = require('./../utils/multer');
const { failureResponse, successResponse } = require('./../utils/response');
const { getPath } = require('./../utils/generateUrl');

module.exports = function(app){
    
    //add new song
    let cb = multer.fields([{name: 'song'}, {name: 'name'}, {name: 'artistId'}, {name: 'image'}]);
    app.post('/api/v1/songs', cb, async (req, res) => {
        let { name, artistId } = req.body;
        
        let urlToSong = req.files['song'][0].filename;
        let urlToImage = req.files['image'][0].filename;
        let song = Song.create({
            name: name,
            urlToSong: urlToSong,
            urlToImage: urlToImage,
            artistId: artistId
        });
        song.then(data => {
            let song = { id: data.id, name: data.name, songUrl: getPath(req, data.urlToSong), 
                    songImageUrl: getPath(req, data.urlToImage)};
            successResponse({
                artist: song
            }, res)
        }).catch(err => {
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })

    //get all songs 
    app.get('/api/v1/songs', async (req, res) => {
        let song = Song.findAll({
            include: [
                {
                    model: Artist,
                    include: 'user',
                    as: 'artist'
                }
            ]
        });
        song.then(data => {
            let songs = data.map(item => (
                {
                    id: item.id,
                    name: item.name,
                    image: getPath(req, item.urlToImage),
                    songUrl: getPath(req, item.urlToSong),
                    artist: item.artist ? {
                        id: item.artist.id,
                        name: item.artist.user.name,
                        image: getPath(req, data.urlToImage)
                    } : null
                }
            ))
            successResponse({
                songs: songs
            }, res)
        }).catch(err => {
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })
}