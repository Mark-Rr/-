//引用express框架
const express = require('express');
//导入dateformat模块，使得可以更改时间格式
const dateFormat = require('dateformat');
//导入mongan模块，可以让客户端发送的请求信息打印出来
const morgan = require('morgan');
//导入config模块，读取参数为json格式config.get("")
const config = require('config');
//导入art-template模块
const template = require('art-template');
//建立服务器
const  app =express();
//处理路径
 const path = require('path');
//引入body-parser,处理post参数
const bodyParser = require('body-parser');
//导入express-session
const session = require('express-session');
//加入格式为art，模板为expre-art-template
 app.engine('art',require('express-art-template'));
//加入模板引擎外部变量
template.defaults.imports.dateFormat = dateFormat ;
//设置模板引擎存放目录
app.set('views',path.join(__dirname,'views'))
//设置引擎默认格式
app.set('view engine','art');
 //处理post请求参数
 app.use(bodyParser.urlencoded({extended:false}));

//配置session
app.use(session({secret:"secret-key"}))
//开放静态资源文件
  app.use(express.static(path.join(__dirname,'public')));
 
// console.log(config.get('title'))

 //获取系统环境变量，返回值为对象 
if (process.env.NODE_ENV=='development') {
  //当前是开发环境
  console.log('当前是开发环境');
  //在开发环境中，将客户端发送给服务器的请求打印出来
  app.use(morgan('dev'))
}
  else{
  	//当前是生产环境
  	console.log('当前是生产环境');
  }
  

//连接数据库
require('./model/connect.js');

  //引用路由模块
 const home = require('./route/home.js');
 const admin = require('./route/admin.js');
  const reg = require('./route/reg.js');
   //登录拦截
app.use('/admin',require('./middlewave/loginGuard'))
//创建路由
  app.use("/home",home);
  app.use("/admin",admin);
  app.use('/reg',reg);
  
//
app.use((err,req,res,next) =>{
	//将字符串变成对象
const result = JSON.parse(err);
//对重定向的路径对应的get参数进行拼接
let parame=[];
for(let x in result){
	if(x!='path'){
		parame.push(x+'='+result[x]);
	}
}

res.redirect(`${result.path}?${parame.join('&')}`)
})
 
  //监听端口
  app.listen(80);
  console.log("服务器启动成功,请访问localhost");


  