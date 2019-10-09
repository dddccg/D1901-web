$(function () {
    //滚动距离
    var cH = document.documentElement.clientHeight;
    $(window).scroll(function(){
        var os=$(document).scrollTop();
        if(os>=136){
            $('.fixed').css({
                'display':'block'
            })
         }else{
            $('.fixed').css({
                'display':'none'
            })
        }
        if(os>=cH){
            $('.return-top').css({
                'display':'block'
            })
        }else{
            $('.return-top').css({
                'display':'none'
            })
        }
    })
    //点击回到顶部
$('.return-top').click(function(){
    timer = setInterval(function(){
        var sH = document.documentElement.scrollTop||document.body.scrollTop;
        var  speed = - Math.ceil(sH/4);
        document.documentElement.scrollTop = document.body.scrollTop = sH+speed;
    if((sH-50)<=0){
        clearInterval(timer);
    }
    },30);
})
    //阴影
    $('.your-like').hover(function(){
        $(this).css({
            'box-shadow':'0 0 5px 3px #ddd'
        })
    },function(){
        $(this).css({
            'box-shadow':'none'
        })
        
    })
    //a 的移入效果
    $('.user-right a,.nav a,.news a,.login a').hover(function(){
        $(this).css({
            'color':'red'
        })
    },function(){
        $(this).css({
            'color':'#666'
        })
    })

    $('.anfubao').hover(function(){
        $(this).css({
            'borderColor':'red',
            'backgroundPosition':"110px "+"-58px"
        }).find('a').css({
            'color':'red'
        })
    },function(){
        $(this).css({
            'backgroundPosition':"110px "+"13px",
            'borderColor':'#666'
        }).find('a').css({
            'color':'#666'
        })
    })

    $('.discount a').hover(function(){
        $(this).css({
            'backgroundColor':'red',
            'color':'white',
            'text-decoration':'none'
        })
    },function(){
        $(this).css({
            'backgroundColor':'#FFF3F5',
            'color':'red',
        })
    })

    //精灵图
    $('.spirit a').hover(function(){
        $(this).find('div').css({
            'backgroundPosition':"8px -28px",
        })
    },function(){
        $(this).find('div').css({
            'backgroundPosition':"8px 0",
        })
    })
    $('.your-like .collect').hover(function(){
        $(this).css({
            'backgroundPosition':"7px -27px",
            'color':'red'
        })
    },function(){
        $(this).css({
            'backgroundPosition':"7px 4px",
            'color':'#666'
        })
    })
        //小导航菜单
        $('.catalogue').hover(function(){
            $(this).find('.wrap-2').stop().slideDown(200);
        },function(){
            $(this).find('.wrap-2').stop().slideUp(200);
        });
    var index1=0;
    $(".nav li").hover(function () {
        index1 = $(this).index();
        $('.eye').css({
            'display':'block',
            'top':'-15px',
            'left':(index1)*85+20,
            // 'transition':'top 2s linear'
        })
    },function(){
        $('.eye').css({
            'top':'50px',
        })
    });

    //点击放大
    $('.super-value img').hover(function(){
        $(this).stop().animate({
            width:1.1*$(this).width(),
            height:1.1*$(this).height(),
            left:-0.1*$(this).width()/2,
            top:-0.1*$(this).height()/2
        })
    },function(){
        $(this).stop().animate({
            width:224,
            height:250,
            top:0,
            left:0
        })
    });
    $('.product img').hover(function(){
        $(this).stop().animate({
            width:1.1*$(this).width(),
            height:1.1*$(this).height(),
            left:-0.1*$(this).width()/2,
            top:-0.1*$(this).height()/2
        })
    },function(){
        $(this).stop().animate({
            width:140,
            height:140,
            top:0,
            left:0
        })
    });
    $('.wrapper-2 img').hover(function(){
        $(this).stop().animate({
            width:1.1*$(this).width(),
            height:1.1*$(this).height(),
            left:-0.1*$(this).width()/2,
            top:-0.1*$(this).height()/2
        })
    },function(){
        $(this).stop().animate({
            width:305,
            height:370,
            top:0,
            left:0
        })
    });
    $('.excellent img').hover(function(){
        $(this).stop().animate({
            width:1.1*$(this).width(),
            height:1.1*$(this).height(),
            left:-0.1*$(this).width()/2,
            top:-0.1*$(this).height()/2
        })
    },function(){
        $(this).stop().animate({
            width:285,
            height:180,
            top:0,
            left:0
        })
    });
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
    $('.wrapper-2>ol>li>p').eq(index).stop().animate({
        width:'100%'
    },2000).siblings().css({
        'backgroundColor':'red'
    })
}