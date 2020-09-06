//引用express框架
const express = require('express');
//获取路由
const home = express.Router();
//博客前台展示页面
home.get('/',require("./home/index.js"));
// 文章详情页面
home.get('/article',require("./home/article.js"))
home.post('/comment',require("./home/comment.js"))
//把路由对象模块化导出
module.exports = home;
