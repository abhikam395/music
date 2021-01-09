const User = require('../models').User;
const { hashPassword, checkPassword } = require('../utils/hashpassword');
const { successResponse, failureResponse } = require('./../utils/response');
const { generateToken } = require('./../utils/token');

module.exports = function(app){
    app.post('/api/v1/register', async (req, res) => {
        let { name, email, password } = req.query;
        let hash = hashPassword(req.query.password);
        let user = User.create({
            name: name,
            email: email,
            password: hash
        })
        user.then(data => {
            let user = { id: data.id, name: data.name, email: data.email,};
            var token = generateToken(user);

            successResponse({
                token: token,
                user: user
            }, res)

        }).catch(err => {
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })

    app.post('/api/v1/login', async (req, res) => {
        let { email, password } = req.query;
        let user = User.findOne({
            where: {
                email: email
            }
        })
        user.then(data => {
            if(data){
                let hashPassword = data.password;
                if(checkPassword(hashPassword, password)){
                    let user = { id: data.id, name: data.name, email: data.email,};
                    var token = generateToken(user);
                    successResponse({
                        token: token,
                        user: user
                    }, res)
                }
                else{
                    failureResponse({
                        message: 'Wrong password',
                    }, res);
                }
            }
            else{
                failureResponse({
                    message: 'User not found',
                }, res);
            }

        }).catch(err => {
            
            failureResponse({
                message: err['errors'][0].message,
                code: err['parent'].code
            }, res);
        })
    })
}