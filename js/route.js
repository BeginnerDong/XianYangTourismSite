$(function(){
	var pin = $(".pin");
	pin.mouseover(function(){
		$(".weibo").css("display","block");
    });
    
    var map = $(".map")

    map.click(function(){
		$(".weibo").css("display","none");
    });

})