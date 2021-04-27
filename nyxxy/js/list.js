$(function(){
	/*栏目图片高度*/
	var $lbannerImg = $(".l-banner").find("img");
	var imgsrc = $lbannerImg.attr("src");
	if(imgsrc == "" || imgsrc == undefined){
		var imgsrc = $lbannerImg.data("imgsrc");
	}
	//$lbannerImg.attr("src",imgsrc);
	$(".l-banner").css("backgroundImage","url("+imgsrc+")");
	
	var os = function(){  
		var ua = navigator.userAgent,  
		isWindowsPhone = /(?:Windows Phone)/.test(ua),  
		isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
		isAndroid = /(?:Android)/.test(ua),   
		isFireFox = /(?:Firefox)/.test(ua),   
		isChrome = /(?:Chrome|CriOS)/.test(ua),  
		isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
		isPhone = /(?:iPhone)/.test(ua) && !isTablet,  
		isPc = !isPhone && !isAndroid && !isSymbian;  
		return {  
			isTablet: isTablet,  
			isPhone: isPhone,  
			isAndroid : isAndroid,  
			isPc : isPc  
		};  
	}();
	
	if(os.isAndroid || os.isPhone || os.isTablet){
	    scrollTable()
	}
	if(os.isPhone || os.isTablet){
		var idIframe = 'wrapperinner-iframe-t';
		$(".wp_articlecontent iframe").each(function(i, iframe){
			var idsIframe = idIframe+'-'+i;
			$wrapper = $('<div class="wrapperiframe" id="'+idsIframe+'" />');
			$(iframe).wrap($wrapper);
			var resultContentH = $(iframe).height();
			$("#"+ids).height(resultContentH+20);
		});
	}
	function scrollTable(){
		setTimeout(function(){
			var id = 'wrapperinner-tab-t';
			$(".wp_articlecontent table").each(function(i, table){
				var ids = id+'-'+i;
				$wrapper = $('<div class="wrapperinner" id="'+ids+'" />');
				$scroller = $('<div class="scroller" />');
				$(table).wrap($wrapper);
				$(table).wrap($scroller);
				
				var resultContentH = $(table).height();
				$("#"+ids).height(resultContentH+20);
				var scroller = new IScroll("#"+ids, { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
				setTimeout(function(){
					scroller.refresh();
				},60);
				$(table).data("scroller", scroller);
			});
		},30);
	}
}); 




