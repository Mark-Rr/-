	//导入加密文件
const bcrypt = require('bcryptjs');
//引入joi模块，验证表单
const Joi = require('joi');
	//创建集合
	//集合规则 
	const mongoose = require('mongoose');
	const userSchema = new mongoose.Schema({
		username:{
			type:String,
			required:true,
			minlength:2,
			maxlength:20
		},
		email:{
			type:String,
	               //独一性
	         unique:true
	           },
	           password:{
	           	type:String,
	           	required:true
	           },
	           role:{
	           	type:String,
	           	required:true

	           },
	       //0禁用
	       //1开启
	       state:{
	       	type:Number,
	       	default:0

	       }

	   });

const User = mongoose.model('User',userSchema);





async function createUser(){
	const salt = await bcrypt.genSalt();
	const pass = await bcrypt.hash('123456',salt)
    const user=  await User.create({
	username:'MarkJx',
	email:'10670546@qq.com',
	password:pass,
	role:'admin',
	state:0
})
.then(()=>{
	console.log('用户创建成功');
})
.catch(()=>{console.log('用户创建失败')})


}
// createUser();

//验证用户信息
const validateUser = (user)=>{
	//定义对象规则
const schema ={
username:Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
email:Joi.string().email().required().error(new Error('邮箱不符合规则')),
password:Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('密码不符合规则')),
role:Joi.string().valid('normal','admin').required().error(new Error('角色不符合规则')),
state:Joi.number().valid(0,1).error(new Error('状态不符合规则'))
   //valid()可自定义值，不存在的值就错误
};
//进行验证
return Joi.validate(user,schema);

}

module.exports = {
	User:User,
	validateUser:validateUser
};