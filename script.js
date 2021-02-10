$(document).ready(function(){
    auto = setInterval(function(){
        if(click ==0){
        click = 1;
        if(slide_num <= -500){slide_num = 0; $('.slide_bg').css({'left':'0'})}
        slide_num = slide_num - 100; 
        $('.slide_bg').animate({'left':slide_num+'%'},500,function(){
            click = 0;
        })
        if(slide_num <= -500){
        $('.slide_btbox li').eq(0).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'})}
        $('.slide_btbox li').eq(slide_num/-100).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'}) 
        }
    },3000)

    play_num = 0;
    $('.slide_pausebt').click(function(){
        if(play_num == 0){
        play_num = 1;
        $(this).attr({"src":"icons/play_s.png"})
        clearInterval(auto)
    }
        else{
        play_num = 0;
        clearInterval(auto)
        $(this).attr({"src":"icons/stop_s.png"})
        if(click ==0){
        click = 1;
        if(slide_num <= -500){slide_num = 0; $('.slide_bg').css({'left':'0'})}
        slide_num = slide_num - 100; 
        $('.slide_bg').animate({'left':slide_num+'%'},500,function(){
            click = 0;
        })
        if(slide_num <= -500){
        $('.slide_btbox li').eq(0).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'})}
        $('.slide_btbox li').eq(slide_num/-100).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'}) 
        }
        auto = setInterval(function(){
            if(click ==0){
        click = 1;
        if(slide_num <= -500){slide_num = 0; $('.slide_bg').css({'left':'0'})}
        slide_num = slide_num - 100; 
        $('.slide_bg').animate({'left':slide_num+'%'},500,function(){
            click = 0;
        })
        if(slide_num <= -500){
        $('.slide_btbox li').eq(0).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'})}
        $('.slide_btbox li').eq(slide_num/-100).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'}) 
        }
        },3000) }
    })
    

    slide_num = 0; 
    click = 0; 
    $('.slide_rightbt').click(function(){
        if(click ==0){
        click = 1;
        if(slide_num <= -500){slide_num = 0; $('.slide_bg').css({'left':'0'})}
        slide_num = slide_num - 100; 
        $('.slide_bg').animate({'left':slide_num+'%'},500,function(){
            click = 0;
        })
        if(slide_num <= -500){
        $('.slide_btbox li').eq(0).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'})}
        $('.slide_btbox li').eq(slide_num/-100).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'}) 
        }
        
    })
    
    $('.slide_leftbt').click(function(){
        if(click ==0){
        click = 1;
        if(slide_num >= 0){ slide_num = -500; $('.slide_bg').css({'left':'-500%'})}
        slide_num = slide_num + 100; 
        $('.slide_bg').animate({'left':slide_num+'%'},500,function(){
            click = 0;
        })
        
        if(slide_num <= -500){
        $('.slide_btbox li').eq(0).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666'})}
        $('.slide_btbox li').eq(slide_num/-100).css({'width':'12px','height':'12px'}).siblings().css({'background-color':'#666','width':'8px','height':'8px'})  //eq는 
        
    }
})
$('.slide_btbox li').click(function(){
    //슬라이드를 움직이는 변수가 좌우단추슬라이드에서 이미 선언되어있다. 그 변수를 사용하자
    slide_num = $(this).index()*-100; //해당 li(thid)의 번호를 발생 1~9 = 0~8 (0에서 출발)
    $('.slide_bg').stop().animate({'left':slide_num+'%'},500)
    // 슬라이드가 해당 버튼을 클릭할때 발생하는 순번에 따라 반응하도록 변수연결! (같은변수 = slide_num)
    $(this).css({'width':'12px','height':'12px'}).siblings().css({'width':'8px','height':'8px'})
})

best_num = 0;
$('.best_leftbt').click(function(){
    best_num = best_num + 380;
    if(best_num > 0){best_num = -1140}
    $('.best_box ul').animate({'left':best_num},500)
})
$('.best_rightbt').click(function(){
    best_num = best_num - 380;
    if(best_num < -1140){best_num = 0}
    $('.best_box ul').animate({'left':best_num},500)
})
    sns_num = 0;
$('.sns_bt_right').click(function(){
    sns_num = sns_num - 80 ;
    if(sns_num < -320){sns_num = 0}
    $('.sns_slide').animate({'left':sns_num + '%'})
})
$('.sns_bt_left').click(function(){
    sns_num = sns_num +80 ;
    if(sns_num > 0){sns_num = -320}
    $('.sns_slide').animate({'left':sns_num + '%'})
})
});