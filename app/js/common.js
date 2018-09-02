$(function() {

    function sliderPosition0(){
        $(".slider-block").animate({
            marginLeft: 0 + "px"
         });  
    }
    function sliderPosition1(){
        $(".slider-block").animate({
            marginLeft: - SliderWrapperWidth + "px"
         });  
    }
    function sliderPosition2(){
        $(".slider-block").animate({
            marginLeft: - SliderWrapperWidth * 2 + "px"
         });
    }
    function noActive(){
        btnActive.removeClass("navigation-btn-active");
    }
    
    function screenText1(){
        $("#slider-change-text").html(btnText1);
    }
    function screenText2(){
        $("#slider-change-text").html(btnText2);
    }
    
    function leftBtnHidden(){
        $(".arrow-left").toggleClass("arrow-left-open");
    }
    
	var allScreen = $(".slider-screen");
    var SliderWrapperWidth = $(".slider-wrapper").innerWidth();
    var sliderStep = 0;
    var btnActive = $(".slider-navigation-btn");
    var btnText1 = "Что&nbsp;происходит<br>с&nbsp;вашим&nbsp;организмом<br>при&nbsp;стрессах?";
    var btnText2 = "Что&nbsp;делает&nbsp;магний,<br>содержащийся<br>в&nbsp;препарате?";
    $(".slider-block").css({
        width: SliderWrapperWidth * 3 + "px"
    });
    
//    for( var i = 0; i< allScreen.length; i++ ){
//        $('<div>', { class: 'slider-navigation-btn'}).appendTo('.slider-navigation');
//    }
    
    $(".arrow-right").on('click',function(){
        
        if( sliderStep === 0 ){
            sliderPosition1();
            noActive();
            screenText2()
            btnActive.eq(1).addClass("navigation-btn-active");
            leftBtnHidden();
            sliderStep++;
         }else if(sliderStep === 1){
            sliderPosition2();
            noActive();
            screenText2() 
            btnActive.eq(2).addClass("navigation-btn-active");
            sliderStep++;
         }else if(sliderStep === 2){
            sliderPosition0()
            noActive();
            screenText1()  
            btnActive.eq(0).addClass("navigation-btn-active");
            leftBtnHidden();
            sliderStep = 0; 
         }
         console.log(sliderStep);
        
    });
    
    $(".arrow-left").on('click', function(){
        if( sliderStep === 0 ){
            sliderPosition2();
            noActive();
            screenText2()
            btnActive.eq(2).addClass("navigation-btn-active");
            sliderStep=2;
         }else if(sliderStep === 1){
            sliderPosition0();
            noActive();
            screenText1() 
            btnActive.eq(0).addClass("navigation-btn-active");
            leftBtnHidden(); 
            sliderStep--;
         }else if(sliderStep === 2){
            sliderPosition1()
            noActive();
            screenText2() 
            btnActive.eq(1).addClass("navigation-btn-active");
            sliderStep--; 
         }
    });
    
//    $( ".slider-navigation" ).click(function( event ) {

//        console.log(event.target)
//         btnActive.eq(event.target.addClass("navigation-btn-active");
//    });
//    
//    $( window ).resize(function() {
//        SliderWrapperWidth = $(".slider-wrapper").innerWidth();
//        sliderPosition1()
//        noActive();
//        btnActive.eq(1).addClass("navigation-btn-active");
//    });
    
});