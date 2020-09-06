 const {User} = require('../../model/user');

module.exports = async (req,res)=>{
  //标识  用来标记当前页面访问页面
   req.app.locals.currentLink='user';


	   //接收客户端传递的参数
       let page =  req.query.page||1;  //初始页第一页
       //每页的数据条数
       let pagesize =1;
       //数据库总共的条数
       let count = await User.countDocuments({});
       //所需要的页数
       let total = Math.ceil(count/pagesize);
      //页码对应的开始查询位置
       let strat = (page-1)*pagesize;
 //     将用户信息从数据库查询出来
    let users = await User.find({}).limit(pagesize).skip(strat);
	res.render('admin/user',{
          users:users,
          page:page,
          total:total
  });
 
}