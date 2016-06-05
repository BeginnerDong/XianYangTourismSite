/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(function(){
	var xinlangcode = $("#xinlangicon");
	xinlangcode.mouseover(function(){
		$("#xinlangcode").css("display","block");
	});
	xinlangcode.mouseleave(function(){
		$("#xinlangcode").css("display","none");
    });

    var weixincode = $("#weixinicon");
	weixincode.mouseover(function(){
		$("#weixincode").css("display","block");
	});
	weixincode.mouseleave(function(){
		$("#weixincode").css("display","none");
    });

})