$(function(){

    $('.nav-menu>ul>li').hover(function(){
        $(this).find('.menu-left').stop().slideDown(100)
    },function(){
        $(this).find('.menu-left').stop().slideUp(100)
    })

    $('.menu-left>ul>li').hover(function(){
        $(this).find('.menu-right').css({
            'display':'block'
        }).parent().siblings().find('.menu-right').css({
            'display':'none'
        })
    },function(){
        $('.menu-right').css({
            'display':'none'
        })
    })

    $('.nav-menu>ul>li>a').hover(function(){
        $(this).css({
            'color':'white',
            'background':'red'
        })
    },function(){
        $(this).css({
            'color':'white',
            'background':'black'
        })
    })
    $('.menu-left>ul>li>a').hover(function(){
        $(this).css({
            'color':'white',
            'background':'#888'
        })
    },function(){
        $(this).css({
            'color':'white',
            'background':'black'
        })
    })

    //点击放大
    $('.hot-end img').hover(function(){
        $(this).stop().animate({
            width:1.1*$(this).width(),
            height:1.1*$(this).height(),
            left:-0.1*$(this).width()/2,
            top:-0.1*$(this).height()/2
        })
    },function(){
        $(this).stop().animate({
            width:158,
            height:248,
            top:0,
            left:0
        })
    });

})