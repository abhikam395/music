module.exports = function(app, express){
    app.defaultConfiguration(function(){
        app.use(express.logger());
    });

    app.defaultConfiguration('development', function(){
        app.use(express.errorHandler({
            dumpExceptions: true,
            showStack: true
        }));
    });

    app.defaultConfiguration('production', function(){
        app.use(express.errorHandler());
    });
}