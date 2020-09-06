//引用express框架
const express = require('express');
//获取路由
const reg = express.Router();
//注册展示页面a
reg.get('/a',require("./reg/reg.js"));
//注册提交，传入数据库b
reg.post('/b',require("./reg/regForm.js"))
//把路由对象模块化导出
module.exports = reg;
