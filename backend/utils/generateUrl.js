module.exports.getPath = function(req, path){
    return req.protocol + "://" + req.get('host') + '/' + path;
}