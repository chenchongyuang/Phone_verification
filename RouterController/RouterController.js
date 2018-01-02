const SQL = require(__basename +'/lib/sql/sql.js');

const API = require(__basename +'/service/api.js');

class RouterController{
	constructor(){}
	homeController(req,res){
        let sql = SQL.homesql();
        API.query(sql)
        .then((result) => {
        	res.send(result[0]);
        })
	}
}

module.exports = new RouterController();