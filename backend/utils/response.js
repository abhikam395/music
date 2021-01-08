module.exports.successResponse = function(object, res){
    return res.json({
        status: true,
        data: object
    })
}

module.exports.failureResponse = function(object, res){
    return res.json({
        status: false,
        errors: {
            message: object.message,
            code: object.code
        }
    })
}