//导入加密文件
const bcrypt = require('bcryptjs');
//生成随机字符串
//genSalt接受一个参数，越高生成字符串越多
 //返回异步对象
 async function run(){
   const salt = await bcrypt.genSalt(10);
    console.log(salt);
  //第一个参数是明文
  //第二个为加密后密码
   const result = await bcrypt.hash("123465",salt);
                const   password="123465"
   console.log(result);

    let isValid= await bcrypt.compare(password,result);
     console.log(isValid)  //问题
 }
 
 
 
 run();
//  /**
//  * bcryptjs  加密
//  */
// const bcryptjs = require('bcryptjs');
// const password = '123456';

// /**
//  * 加密处理 - 同步方法
//  * bcryptjs.hashSync(data, salt)
//  *    - data  要加密的数据
//  *    - slat  用于哈希密码的盐。如果指定为数字，则将使用指定的轮数生成盐并将其使用。推荐 10
//  */

// let hasPwd=bcryptjs.hashSync(password, 10);

// /**
//  * 注意：每次调用输出都会不一样
//  */
// console.log(hasPwd) // $2a$10$y5WA7lOVpzxVh.pqK3kUzOFZaJZXUMutvb3EG0qocgRxGcKQG36ou

// /**
//  * 校验 - 使用同步方法
//  * bcryptjs.compareSync(data, encrypted)
//  *    - data        要比较的数据, 使用登录时传递过来的密码
//  *    - encrypted   要比较的数据, 使用从数据库中查询出来的加密过的密码
//  */

// let comparePwd=bcryptjs.compareSync(password,'$2a$10$OIYc/KLDcBdHf8Ww9uKbG.CLxdGBMLSQ0h7l4c0G7ED7.fqmpb4B6');
// console.log(comparePwd);//true
