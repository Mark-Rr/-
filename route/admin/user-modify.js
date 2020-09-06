const bcrypt=require('bcryptjs')

const {User} = require("../../model/user.js")
module.exports = async (req,res,next)=>{
	//获取到修改页面的url id参数
  const id = req.query.id;
  //修改表单的内容
   const {username,email,role,state }= req.body;
  let user = await User.findOne({_id:id});
  // res.send(req.body.password);
  // return;
  let isvalid = await bcrypt.compare(req.body.password,user.password);
  if(isvalid){
    
//密码比对成功，则更新内容，密码不改变
await User.updateOne({_id:id},{
 username:username,
 email:email,
 role:role,
 state:state

});
//重定向页面
res.redirect('/admin/user');
  }else{
//密码比对失败
//next(字符串)
next(JSON.stringify({path:'/admin/user-edit',message:'密码比对失败，无法修改',id:id}));
  }
}