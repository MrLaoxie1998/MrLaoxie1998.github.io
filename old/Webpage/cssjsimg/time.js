class show_time{
	//这里代码多了几行，但是不会延迟显示，速度比较好，格式可以自定义，是理想的时间显示
setInterval("fun(show_time)",1);
function fun(timeID){ 
var date = new Date();  //创建对象  
var y = date.getFullYear();     //获取年份  
var m =date.getMonth()+1;   //获取月份  返回0-11  
var d = date.getDate(); // 获取日  
var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) 
var ww = ' 星期'+'日一二三四五六'.charAt(new Date().getDay()) ;//星期几
var h = date.getHours();  //时
var minute = date.getMinutes()  //分
var s = date.getSeconds(); //秒
var sss = date.getMilliseconds() ; //毫秒
if(m