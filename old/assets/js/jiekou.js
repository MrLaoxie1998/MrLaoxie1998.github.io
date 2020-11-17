function userName(){
	if(!$("#username").val()){
		$("#username").next().show().eq($("#username").next().css("color","red"));
		$("#username").next().html("请输入用户名");
		return false;
	}else if(!/^[a-zA-Z]([-\w]{4,15})$/.test($("#username").val())){
		$("#username").next().show().eq($("#username").next().css("color","red"));
		$("#username").next().html("用户名不可用");
		return false;
	}else{
		$("#username").next().show().eq($("#username").next().css("color","green"));
		$("#username").next().html("用户名输入正确");
		return true;
	}
}