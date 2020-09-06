const {Article} = require("../../model/article.js");
module.exports =async (req,res) =>{
	//标识  用来标记当前页面访问页面
   req.app.locals.currentLink='article';
   //获取页面id
   const id = req.query.id;
   	//如果存在则证明此编辑页面为修改页面
   if(id){
   let  article = await Article.findOne({_id:id});
   // console.log(article.content);
   res.render('admin/article-edit',{
       article:article,
       button:'修改',
       link:'/admin/article-modify?id='+id

   });

   }
   else{
	res.render('admin/article-edit',{
		button:'提交',
		link:'/admin/article-add'
	});
}
}