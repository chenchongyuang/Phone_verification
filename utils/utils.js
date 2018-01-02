const SMSClient = require('@alicloud/sms-sdk');

class Utils{
	constructor(){}
	sendMessage(code){
		const accessKeyId = 'LTAIVSulUBsxpgT4'
		const secretAccessKey = 'BWuid66FiUFNFXhWtSitTJETuAQ87F'
		//初始化sms_client
		let smsClient = new SMSClient({accessKeyId, secretAccessKey})
		//发送短信
		return smsClient.sendSMS({
		    PhoneNumbers: '13927975080',
		    SignName: '红星商城',
		    TemplateCode: 'SMS_119091894',
		    TemplateParam: '{"code":"'+ code +'"}'
		})
	}
}
module.exports = new Utils();