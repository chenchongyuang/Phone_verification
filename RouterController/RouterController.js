/*const SQL = require(__basename +'/lib/sql/sql.js');

const API = require(__basename +'/service/api.js');
*/
const Utils = require(__basename + '/utils/utils.js');
class RouterController{
	constructor(){}
	homeController(req,res){
    
      let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		Utils.sendMessage(code)
			.then(function (data) {
			    let {Code}=data;
			    if (Code === 'OK') {
			        //处理返回参数
			        console.log(data);
			        res.json({code: code, msg: '发送短信验证码成功', status: 1});
			    }
			}, function (err) {
			    console.log(err);
			       res.json({msg: '发送短信验证码失败', status: 0});
			})
    }
}
module.exports = new RouterController();