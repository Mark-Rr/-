//新增用户点击post表格进入的页面后的操作
//引入joi模块，验证表单
const Joi = require('joi');
//加入加密模块
const bcrypt = require('bcryptjs')
const {User,validateUser} = require('../../model/user.js');
module.exports = async (req,res,next)=>{

// 验证
//  await Joi.validate({
//    username:req.body.username,
//    email:
//    password:
//    role:
//    state:

// },schema)
try{
  await	validateUser(req.body);
}
catch(err){
	//验证失败
	// console.log(err.message);
	//重定向新页面
// return 	res.redirect(`/admin/user-edit?message=${err.message}`);
 //JSON.stringify()  把对象变成字符串
 
 return next(JSON.stringify({path:"/admin/user-edit",message:err.message}));
}
 
  //查询邮箱地址是否被注册过
  let user = await User.findOne({email:req.body.email})
	 //查询到已经存在
	   if(user){
 // return res.redirect(`/admin/user-edit?message=邮箱地址已被申请`);
	 
 return next( JSON.stringify({path:"/admin/user-edit",message:"邮箱地址已被申请"}));
	   }
	  //密码加密
const salt = await bcrypt.genSalt(10);

const password = await bcrypt.hash(req.body.password,salt);
// console.log(password)
// console.log(req.body.password)
//替换密码
req.body.password = password;

//放入数据库中
await User.create(req.body);
//新增用户成功，返回列表页面
// res.redirect('')
 
next(JSON.stringify({path:"/admin/user"}))
}

