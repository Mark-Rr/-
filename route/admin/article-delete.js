const {Article} =require('../../model/article');

module.exports =async (req,res)=>{
	//获取到删除页面的url id参数
    const id = req.query.id;
    //通过id找到对应对象并且删除
    await Article.findOneAndDelete({_id:id});
    //重定向到文章页面
    res.redirect('/admin/article')


}