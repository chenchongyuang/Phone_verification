const RouterController = require(__basename + '/RouterController/RouterController.js');

exports.router =function(app){
       app.get('/message', RouterController.homeController);

}