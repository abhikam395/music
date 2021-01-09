const Artist = require('./../models').Artist;
const { multer } = require('./../utils/multer');
const { failureResponse, successResponse } = require('./../utils/response');
const { getPath } = require('./../utils/generateUrl');
 
module.exports = function(app){
    cb = multer.fields([{userId: 'userId'}, {name: 'image'}])

    app.post('/api/v1/artists' ,cb , async (req, res) => {
        let { userId } = req.body;
        let urlToImage = req.files['image'][0].filename;
        let artist = Artist.create({
            userId: userId,
            image: urlToImage
        })
        artist.then(data => {
            let artist = { id: data.id, name: data.name, dob: data.dob, 
                    image: getPath(req, item.urlToImage)};
            successResponse({
                artist: artist
            }, res)
        }).catch(err => {
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })

    app.get('/api/v1/artists', async (req, res) => {
        let artist = Artist.findAll({
            include: 'user'
        })
        artist.then(data => {
            console.log()
            let artists = data.map(item => (
                {   
                    id: item.id,
                    name: item.user.name,
                    image: getPath(req, item.image)
                }
            ))
            successResponse({
                artist: artists
            }, res)
        }).catch(err => {
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })
    
}
