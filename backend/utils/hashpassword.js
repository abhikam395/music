const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

exports.hashPassword = function(password){
    return bcrypt.hashSync(password, salt);
}

exports.checkPassword = function(hashPassword, plainPassword){
    return bcrypt.compareSync(plainPassword, hashPassword);
}