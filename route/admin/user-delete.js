const {User} = require("../../model/user.js")
module.exports = async (req,res)=>{
	//获取到隐藏input中的id，get方式的id,并且删除
	await User.findOneAndDelete({_id:req.query.id});
	//重定向
	res.redirect('/admin/user');
	
}