const Joi = require('joi');
//建造验证对象
const schema = {
   username:Joi.string().min(2).max(5).error(new Error('usename属性没有通过验证')),
   birth:Joi.number().min(1900).max(2013).error(new Error('birth属性没有通过验证'))
};
//实施验证
async function run() {
	// 异步函数的try，catch方法
  try{
      await Joi.validate({username:'13D5',birth:1999},schema);
  }catch(err){
  	console.log(err.message);
  	return ;
  }
console.log('验证正确')
  // const a = await Joi.validate({username:"123"},schema);
  //  console.log(a);
}
run();