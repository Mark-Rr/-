 
//jquer方法中寻找表单的值
 function serializeToJson(form){
var result ={};
  var f = form.serializeArray();
       f.forEach(function(item){

      result[item.name]=item.value

       });
       return result;
  }