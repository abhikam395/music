const jwt = require('jsonwebtoken');

module.exports.generateToken = function(user){
    return jwt.sign({user: user}, 'shhhhh')
}

module.exports.checkToken = function(token){
    return true;
}