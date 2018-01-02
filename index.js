global.__basename = __dirname;

global.config = require(__basename + '/config/config.js');

const express = require('express');

const Router = require(__basename + '/router/router.js');

const app = express();

app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', '3.2.1');
  next();
});

app.use(express.static(__basename +'/img'));

Router.router(app);

app.listen(config.server.port);

