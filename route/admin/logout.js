module.exports=(req,res)=>{
  //删除session
  req.session.destroy(function () {
    //删除cookie
    res.clearCookie('connect.sid');
    //重定向
    res.redirect('/admin/login');
    //当关闭浏览器时候，清除模板的保留信息
    req.app.locals.userInfo = null;

  });
}