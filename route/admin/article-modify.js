const {Article} = require("../../model/article.js");
//引入formidable模块，可以解析表单
const formidable = require('formidable')
//引入路径
const path = require('path');
module.exports =async (req,res) =>{
	//获取到修改页面的url id参数
  const id = req.query.id;
  //1.创建表单解析对象
const form = new formidable.IncomingForm();
//2.配置文件上传位置
form.uploadDir = path.join(__dirname,"../","../",'public','uploads');
//3.保留上传文件的后缀名
form.keepExtensions = true;
//4.解析表单
form.parse(req, async(err,fields,fiels)=>{
let article = await Article.findOne({_id:id});
console.log(fiels)
//更新数据
await Article.updateOne({_id:id},{
title:fields.title,
author:fields.author,
publishDate:fields.publishDate,
cover:fiels.cover.path.split('public')[1],
content:fields.content

});
});
//重定向
res.redirect('/admin/article')




}