//获取评论集合模块
const{ Comment} = require('../../model/comment');

module.exports =async (req,res)=>{
	//获取评论表格参数
   const {content,uid,aid} = req.body;
   //把评论信息存在数据库中
 await Comment.create({
   	content:content,
   	uid:uid,
   	aid:aid,
   	time:new Date()
   })
   // console.log(comment)
   //重定向页面
   res.redirect('/home/article?id='+aid);
   
}