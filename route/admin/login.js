//引入mongoose集合
const {User}=require('../../model/user.js');
//导入加密文件
const bcrypt = require('bcryptjs');


module.exports = async (req,res)=>{

	//对参数进行二次验证，以防止浏览器不解析js文件
	const email = req.body.email;
    const password = req.body.password;
    console.log(password)

   // if(email.trim().length == 0 || password.trim().length == 0){      
   //       return res.send('<h4>邮件地址或密码错误</h4>')	;
   //   }
        if(email.trim().length == 0 || password.trim().length == 0){      
         return res.render('admin/error',{msg:"邮箱或者密码错误"});
     }
     //根据邮箱查询用户信息
   let user = await  User.findOne({email:email})
    console.log(user)
      //把客户端传递过来的参数和查询
   if(user){
   	//对比密码
    //明文和暗文的对比
   let isValid= await bcrypt.compare(password,user.password);
     // console.log(isValid)  //问题
   	if(isValid){
       //把用户名给存到session
        req.session.username = user.username ;
       req.app.locals.userInfo = user;
       if(user.role=='admin'){
      res.redirect('/admin/user');
       }
       else{
        res.redirect('/home/')
       }
       // res.send('登录成功');
       //express框架中实现重定向
       
   
   	}else{
   		//密码不一致
res.render('admin/error',{msg:'邮箱或者密码错误'})
   	}
      
   }else{
   	//没有查询到
   	res.render('admin/error',{msg:'邮箱或者密码错误'})
   }


}
// 
// 
// 
// 
// 
//  // 不加密
//         if(password==user.password){
//        //把用户名给存到session
//         req.session.username = user.username ;
//        req.app.locals.userInfo = user;
//        if(user.role=='admin'){
//       res.redirect('/admin/user');
//        }
//        else{
//         res.redirect('/home/')
//        }
//        // res.send('登录成功');
//        //express框架中实现重定向
       
   
//     }else{
//       //密码不一致
// res.render('admin/error',{msg:'邮箱或者密码错误'})
//     }
      
//    }else{
//     //没有查询到
//     res.render('admin/error',{msg:'邮箱或者密码错误'})
//    }


// }