$(function () {
    //轮播图
    var index = 0;
    var index_2=0;
    var len = $(".wrapper>ol>li").length;
    var len_2 = $(".wrapper-2>ol>li").length;
    var timer = null;
    var timer_2 = null;

    $(".wrapper>ol>li").mouseenter(function () {
        // 获取下标
        index = $(this).index();
        change(index);
    });
    $(".wrapper-2>ol>li").mouseenter(function () {
        // 获取下标
        index_2 = $(this).index();
        change_2(index_2);
    });
    // 点击下一张
    $(".next").click(next);
    function next() {
        index++;
        index %= len;
        change(index);
    }

    function next_2() {
        index_2++;
        index_2 %= len_2;
        change_2(index_2);
    }
    // 点击上一张
    $(".prev").click(function () {
        index--;
        if (index == -1) {
            index = len - 1;
        }
        change(index);
    });

    // 定时器
    // var timer_bg=null;
    $(".wrapper").hover(function () {
        clearInterval(timer);
        $('.prev,.next').stop().fadeIn();
    }, function () {
        timer = setInterval(next, 2000);
        $('.prev,.next').stop().fadeOut();
    }).trigger("mouseleave");

    
    $(".wrapper-2").hover(function () {
        clearInterval(timer_2);
        $('.prev-2,.next-2').stop().fadeIn();
    }, function () {
        timer_2 = setInterval(next_2, 2000);
        $('.prev,.next').stop().fadeOut();
    }).trigger("mouseleave");

    $('.prev,.next').hover(function(){
        $(this).css({
            'backgroundColor':'#999'
        })
    },function(){
        $(this).css({
            'backgroundColor':'#666'
        })
    })
})

function change(index) {
    $(".wrapper>ol>li").eq(index).addClass('current').siblings().removeClass('current');
    $(".wrapper>ul>li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
    if(index==0){
        $('.bg').css({
            'backgroundColor':'#83AD9F'
        });
    }else if(index==1){
        $('.bg').css({
            'backgroundColor':'#A81616'
        }) 
    }else if(index==2){
        $('.bg').css({
            'backgroundColor':'#FFDDD5'
        }) 
    }else{
        $('.bg').css({
            'backgroundColor':'#801D17'
        }) 
    }
}
function change_2(index) {
    $(".wrapper-2>ol>li").eq(index).addClass('current-2').siblings().removeClass('current-2');
    $(".wrapper-2>ul>li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
    $('.wrapper-2>ol>li').eq(index).find("p").css({
        'display':'block',
    }).stop().animate({
        width:'100%'
    },2000).parent().siblings().find("p").css({
        'display':'none',
        'width':'0'
    })
    
}