//导入文章集合
const {Article} =require('../../model/article')
//导入mongoose-sex-page分页模块
const pageination = require('mongoose-sex-page');
module.exports = async (req,res) =>{

	 const page = req.query.page;
	//标识  用来标记当前页面访问页面
   req.app.locals.currentLink='article';

   //page() 指定当前页
   //size()  指定一页的数据数
   //display()  指定的最多页码数
   //exec()  向数据库发送查询请求
   //populate()通过id集合关联
     let  article = await pageination(Article).find({}).page(page).size(1).display(3).populate('author').exec();
	// res.send(article);
console.log(article);
	res.render('admin/article',{
         article:article,
         

	});
}