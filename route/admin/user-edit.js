const {User} = require("../../model/user.js")

module.exports =async (req,res)=>{

//标识  用来标记当前页面访问页面
   req.app.locals.currentLink='user';
	
	//获取新增用户提交表格时候的错误url信息
    const message = req.query.message;
	//获取修改页面url的id
	const id = req.query.id;
	//如果存在则证明此编辑页面为修改页面
	if(id){
      let user  = await User.findOne({_id:id});
     
     res.render('admin/user-edit',{
		message:message,
		//将修改页面的内容放入当前id对应的内容
		user:user,
		link:'/admin/user-modify?id='+id,
		button:'修改'
	});
     
	}
	else{
		//增加用户
	res.render('admin/user-edit',{
		message:message,
		link:'/admin/user-edit',
		button:'添加'
	});
}
}