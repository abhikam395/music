module.exports = function(app){
    require('./userroute')(app);
    require('./songroute')(app);
    require('./artistroute')(app);
}