//引入mongoose模块
const mongoose = require('mongoose');
//创建文章集合规则
const articleSchema = new mongoose.Schema({
    title:{
         type:String,
         maxlength:20,
         minlength:4,
         required:true
    },
    author:{
     type:mongoose.Schema.Types.ObjectId,
    // type:String,
     ref:'User',
     required:[true,'请填写作者'],
    },
    publishDate:{
    	type:Date,
    	default:Date.now
    },
    cover:{
    	type:String,
        default: null
    	
    },
    content:{
    	type:String
    }
});
//根据规则创建集合
 const Article = mongoose.model('Article',articleSchema)
//将集合模块化导出
module.exports = {
	Article:Article
};