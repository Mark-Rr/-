//引入formidable模块，可以解析表单
const formidable = require('formidable')
//引入路径
const path = require('path');
const {Article} =require('../../model/article');
module.exports = (req,res) =>{
//1.创建表单解析对象
const form = new formidable.IncomingForm();
//2.配置文件上传位置
form.uploadDir = path.join(__dirname,"../","../",'public','uploads');
//3.保留上传文件的后缀名
form.keepExtensions = true;
//4.解析表单
form.parse(req, async(err,fields,fiels)=>{
	//fileds普通参数
	//files文件参数
 // console.log(fields)
 await Article.create({
title:fields.title,
author:fields.author,
publishDate:fields.publishDate,
cover:fiels.cover.path.split('public')[1],
content:fields.content
})
 //重定向到文章页面
 res.redirect('/admin/article')



})


	
}