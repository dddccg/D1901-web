;$(function () {
    var index = 0;
    var len = $(".rollBody>ol>li").length;
    var timer = null;

    $(".rollBody>ol>li").mouseenter(function () {
        // 获取下标
        index = $(this).index();
        change(index);
    });
    // 定时器
    timer = setInterval(function(){
        index++;
        index %= len;
        change(index);
    },2000);
    $(".rollBody").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
        index++;
        index %= len;
        change(index);
    },2000);
    });
})
;function change(index) {
    $(".rollBody>ol>li").eq(index).addClass('current').siblings().removeClass('current');
    $(".rollBody>ul>li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
}

// 固定导航栏
;$(function(){
    $(window).scroll(function(){
        // 获取 滚动距离
        var os = $(document).scrollTop();

        if( os > $(".nav").outerHeight() ){
            $(".nav").css({
                position:"fixed",
                left:0,
                top:0
            });
            $(".main").css({
                marginTop:103
            })
        }else{
            $(".nav").css({
                position:"static",
                
            });
            $(".main").css({
                marginTop:20
            })
        }
    });
})


;$(function() {
    // 滚动条事件
    $(window).scroll(function(){
        // 获取滚动距离
        var os = $(document).scrollTop();
        if(os > 0){
            $(".subnav").fadeIn();
        }else{
            $(".subnav").fadeOut();
        };
        if( os >= $(".life").offset().top){ 
            $(".subnav li").eq(7).addClass("current2").siblings().removeClass("current2");	
        }else if( os >= $(".video").offset().top){ 
            $(".subnav li").eq(6).addClass("current2").siblings().removeClass("current2");	
        }else if( os >= $(".shoes").offset().top){ 
            $(".subnav li").eq(5).addClass("current2").siblings().removeClass("current2");	
        }else if( os >= $(".paly").offset().top){ 
            $(".subnav li").eq(4).addClass("current2").siblings().removeClass("current2");	
        }else if(os >= $(".dian").offset().top){
            $(".subnav li").eq(3).addClass("current2").siblings().removeClass("current2");
        }else if(os >= $(".jia").offset().top){
            $(".subnav li").eq(2).addClass("current2").siblings().removeClass("current2");
        }else if(os >= $(".fu").offset().top){
            $(".subnav li").eq(1).addClass("current2").siblings().removeClass("current2");
        }else if(os >= $(".mei").offset().top){
            $(".subnav li").eq(0).addClass("current2").siblings().removeClass("current2");
        }
    }).trigger("scroll");
    // 点击侧边导航页面位置滚动到对应的距离
    $(".subnav li").click(function(){
        var index = $(this).index();
        $("html,body").animate({
            scrollTop :$(".purchase-everyday-new").eq(index).offset().top
        },200);
    });
})

// 生鲜
;$(function(){
   
    $(".nav-left>ul>li").hover(function(){
        $(this).find('ul').stop().slideDown(400);
    },function(){
        $(this).find('ul').stop().slideUp(300);
    });
})
//第四
;$(function () {
    $("#golbal-nav>ul>li").hover(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('.nav-show').stop().show();
    },function(){
        $(this).find('.nav-show').stop().hide();
    });
})