//登录界面点击外边消失
var shadow=document.getElementById('id01');
window.onclick=function(event){

  if(event.target==shadow){
  	document.getElementById('id01').style.display='none';
  }
}
