const {Article} = require("../../model/article")
//导入分页模块
const pagination=require('mongoose-sex-page')
module.exports = async (req,res)=>{
	  const page =  req.query.page ;

	//查询数据
let article	= await pagination(Article).page(page).size(4).display(5).find({}).populate('author').exec();
console.log(article)
// res.send(article);
// return;

  res.render('home/default',{
  	article:article,
  	page:page
  	
  })
}