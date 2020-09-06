//引用express框架
const express = require('express');

//创建路由
const admin = express.Router();

//渲染登录页面
admin.get('/login',require('./admin/loginpage.js'));

//创建用户列表路由
admin.get('/user',require('./admin/userpage.js'))

//新增用户页面
admin.get('/user-edit',require('./admin/user-edit.js'))
//实现退出登录功能
admin.get('/logout',require('./admin/logout.js'))


 //接收post请求参数,并实现登录功能
admin.post('/login',require('./admin/login.js'))
//创建实现用户增加post功能
admin.post('/user-edit',require('./admin/user-edit-fn'))
//用户修改路由
admin.post('/user-modify',require('./admin/user-modify'))
//删除用户功能路由(通过在删除按钮弹出框加入隐藏input，
//提交时，把隐藏的input的值传入req.query)
admin.get('/user-delete',require('./admin/user-delete'))
//文章列表路由
admin.get('/article',require('./admin/article.js'))
//文章编辑页面路由
admin.get('/article-edit',require('./admin/article-edit.js'))
//文章添加 功能
admin.post('/article-add',require('./admin/article-add'))
//文章修改路由
admin.post('/article-modify',require('./admin/article-modify'))
//删除用户功能路由(通过在删除按钮弹出框加入隐藏input，
//提交时，把隐藏的input的值传入req.query)
admin.get('/article-delete',require('./admin/article-delete'))
//把路由对象模块化导出
module.exports = admin;
