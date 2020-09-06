const {User,validateUser} = require('../../model/user.js');
 //加入加密模块
const bcrypt = require('bcryptjs')
//引入joi模块，验证表单
const Joi = require('joi');
module.exports =async(req,res,next)=>{

  try{
  await	validateUser(req.body);
}
catch(err){
	//验证失败
	// console.log(err.message);
	//重定向新页面
// return 	res.redirect(`/admin/user-edit?message=${err.message}`);
 //JSON.stringify()  把对象变成字符串
 
 return next(JSON.stringify({path:"/reg/a",message:err.message}));
}
 
  //查询邮箱地址是否被注册过
  let user = await User.findOne({email:req.body.email})
	 //查询到已经存在
	   if(user){
 // return res.redirect(`/admin/user-edit?message=邮箱地址已被申请`);
	 
 return next( JSON.stringify({path:"/reg/a",message:"邮箱地址已被申请"}));
	   }
	  //密码加密
const salt = await bcrypt.genSalt(10);

const password = await bcrypt.hash(req.body.password,salt);
// console.log(password)
// console.log(req.body.password)
//替换密码
req.body.password = password;

//放入数据库中
	await User.create({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
     role:req.body.role,
     state:0
	});

	
	
   res.redirect('/admin/login')
}
