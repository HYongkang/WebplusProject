$(function(){
$(".nav li.m").each(function(index,val){
		var html = $(this).find(".subm").html();
		var imgs = $(this).find(".imgs").html();
		var text = $(this).find(".navtxt").html();
		$(".navcon").append("<div class='sub navlist-li navlist-li-"+index+"'></div>");
		if($(this).find(".subm").length>0){
			$(".navcon .sub").eq(index).append("<div class='imgs'><div class='img_bg'></div></div><div class='textcon'></div><div class='subnav'></div><div class='clear'></div>");
			$(".navcon .sub").eq(index).children(".subnav").append(html);
			$(".navcon .sub").eq(index).children(".textcon").append(text);
			return;
		}
	});
	
	$(".nav li.m").each(function(index,val){
		$(this).hover(function(){
			$(this).parent(".nav").next(".navlist").find(".sub").eq(index).stop(true,true).slideDown();
			$(this).parent(".nav").next(".navlist").find(".sub").eq(index).siblings().stop(true,true).slideUp(0);
			$(".navcon .sub").each(function(i,val){
				if(index==i){
					$(this).parent(".nav").next(".navlist").find(".sub").eq(index).siblings().stop(true,true).slideUp(0);
				}
			});
		});
	});
	
	$(".navcon .sub").each(function(index,val){
		$(this).hover(function(){
			$(".nav").children().eq(index).find("a").addClass("hover");
		},function(){
			$(".nav").children().eq(index).find("a").removeClass("hover");
			$(this).stop().slideUp(100);
		});
	});
	$(".nav").parent().hover(function(){
	},function(){
		$(".navcon .sub").stop().slideUp(100);
	});
    //nav
   /*  $(".nav").slide({
        type:"menu", //效果类型
        titCell:".m", // 鼠标触发对象
        targetCell:".sub", // 效果对象，必须被titCell包含
        delayTime:0, // 效果时间
        triggerTime:0, //鼠标延迟触发时间
        returnDefault:true,  //返回默认状态
        defaultIndex:-100,
		mainCell:"#menu"
    }); */

    //banner
    $(".fullSlide").slide({
        titCell:".hd ul",
        mainCell:".bd ul",
        effect:"fold",
        autoPlay:true,
        autoPage:true,
        trigger:"click",
        interTime:5000,       //banner轮播自动播放间隔时间设置
        startFun:function(i){
            jQuery(".fullSlide .txt li").eq(i).show().siblings().hide();
        }
    });

    $(".fullSlide").hover(function(){
        $(this).find(".prev,.next").fadeToggle();
    })

    //foot nav
    $(".slide-box").slide({
        titCell:".hd ul",
        mainCell:".slide-list .bd",
        effect:"leftLoop",
        autoPlay:true,
        autoPage:true,
        trigger:"click",
        interTime:5000       //专题网站自动播放间隔时间设置
    });

    //index news
    $("#index-news").slide({
        titCell:".tab-box a",
        mainCell:".bd",
        effect:"fold",
        trigger:"click",
		autoPlay:true,
		interTime:5000
    });
   $(".wechat").fancybox({
        'titlePosition' : 'over',
        'cyclic'        : true,
        'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">' + (currentIndex + 1) +
                ' / ' + currentArray.length + (title.length ? '   ' + title : '') + '</span>';
        }
    });

    //table
    $(".department-list tr:odd").css({"background":"#e7e7e7"});
	
	/*栏目列表样式*/	
    $(".submain li").first().addClass("on");
    $(".submain li").hover(function(){
		$(this).siblings().removeClass("selected");
        //$(".submain li a").css("color","#666666");
        //$(this).find("a").css("color","#39c3fd");
        var liheight=$(this).height();
		/* if(!$(this).hasClass("menu-id-2")){
			$(".submain .menu-id-2 a").css("background","url('./wb.png') no-repeat 70% 17px");
        } */
        var num=$(this).prevAll().length;
        var sheight=$(this).find("li").height();
        var top=num*(liheight+1);
        /* if(top<39){
            top=39;
        } */
        $(".underline").show().stop().animate({"width":3,"top":top},200);
    },function(){
		$(".underline").hide();
	});
	
    /* $(".submain .menu-id-2 a").hover(function(){
        $(this).css("background","url('./wb.png') no-repeat 70% -65px");
    }) */

	/*搜索*/
	$(".header-search").on("click",function(){
		$(this).children(".search-input").stop(true,true).animate({"width":185},200);
		
		$(".search").click(function(event) {
			/* Act on the event */
			event.preventDefault();
			var val = $.trim($("#keyword").val());
			if(val!==""&& val!=="Search"){
				$(".search-input form").submit();
			}else{
				alert("Search");
			}
		});
		
		
		return false;
	});
	$("html,body").on("click",function(){
		$(this).find(".search-input").stop(true,true).animate({"width":0},200);
		
	});
});