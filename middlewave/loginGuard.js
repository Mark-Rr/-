//登录拦截

const guard =(req,res,next) =>{
	//判断是否登录页面
	//判断是否登录
	if(req.url != '/login'&& !req.session.username){
          res.redirect('/admin/login');
           
	}else{
		//
		next();
	}
}
module.exports = guard;