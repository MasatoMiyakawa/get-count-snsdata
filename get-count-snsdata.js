$(function() {
setSnsCount('#snsbtn');
});
var setSnsCount = function(_this){
    $(_this).each(function(){
    	var entryURL = "http://"+location.host+$(this).find('a').attr('href');
    	var countFB = $(this).find('.sns-fb span');
    	var countTW = $(this).find('.sns-tw span');
    	getCountFB(entryURL,countFB);
    	getCountTW(entryURL,countTW);
    });
}
var getCountTW = function(_url, _this){
	$.ajax({
		url:'http://urls.api.twitter.com/1/urls/count.json',
		dataType:'jsonp',
		data:{
			url:_url
		},
		success:function(res){
			$(_this).text( res.count || 0 );
		},
		error:function(){
			$(_this).text('?');
		}
	});
}
var getCountFB = function(_url, _this){
	$.ajax({
		url:'https://graph.facebook.com/',
		dataType:'jsonp',
		data:{
			id:_url
		},
		success:function(res){
			$(_this).text( res.shares || 0 );
		},
		error:function(){
			$(_this).text('?');
		}
	});
}
