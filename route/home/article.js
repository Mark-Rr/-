//获取文章集合
const {Article} = require("../../model/article")
//获取评论集合模块
const{ Comment} = require('../../model/comment');
module.exports = async (req,res)=>{
	//获取地址栏的id
const id = req.query.id;
//populate()关联其他集合数据
//根据id获取文章信息
let article = await Article.findOne({_id:id}).populate('author');
//查询当前文章对应评论信息
let comment = await Comment.find({aid:id}).populate('uid');
 res.render('home/article',{
 	article:article,
 	comment:comment
 })
}