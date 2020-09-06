
 
module.exports =(req,res)=>{
	const message =  req.query.message;
	res.render('admin/reg',{
		message:message
	})
}