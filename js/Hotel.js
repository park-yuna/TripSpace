//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

$(document).ready(function(){
    createDatePicker();
    click();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.ac-sub-go-top').css('display','block');
        } else {
            $('.ac-sub-go-top').css('display','none');
        }
    });
    
    $(".ac-sub-go-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 700);
        return false;
    });

    /*****************
     BUILD THE SLIDER
    *****************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

    //껍데기의 넓이값을 가져와서 넓이 100%의 효과처리
    var w = $("#wrapper").width() - 100; 
    $("#wrapper").find("#slider li").css("width", w + "px");
    
    //next slide    
    $('#next').click(function(){
        slideRight();
    });
    
    //previous slide
    $('#previous').click(function(){
        slideLeft();
    });
    
    
    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    var autoSlider = setInterval(slideRight, 3000);
    
    //for each slide 
    $.each($('#slider-wrap ul li'), function() { 

    //create a pagination
    var li = document.createElement('li');
    $('#pagination-wrap ul').append(li);    
    });
    
    //counter
    countSlides();
    
    //pagination
    pagination();
    
    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
        function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
        function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); 
    });
});

// datepicker
function createDatePicker(){
    $( "#datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5, #datepicker6" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date()
    });
}

function loginCheck(){
    var con_test = confirm("로그인 후 이용이 가능합니다.");
    if(con_test == true){
        location.href="./login.html";
    }
    else{
        return;
    }
}

function click(){
    $("#ex_chk6, #ex_chk66").click(function(){
        $('#ticketBox2').css('display','block');
        $('#ticketBox1, #ticketBox3, #ticketBox4').css('display','none');
        var w = $(window).width();
        if(w < 1680){
            $('.container2').css('height','900px');
            $('.container2 ').css('top','37%');
            $('.bg2').css('height','2260px');
            $('#wrapper').css('top','44.8%');
            $('body').css('height','900px');
        }else{
            $('.container2').css('height','970px');
            $('.container2 ').css('top','28%');
            $('#wrapper').css('top','33%');
            $('.bg2').css('height','245vh');
        }
    });
    
    $("#ex_chk7, #ex_chk77").click(function(){
        $('#ticketBox3, #ticketBox4').css('display','block');
        $('#ticketBox2').css('display','none');
        $('#ticketBox1').css('display','none');
        var w = $(window).width();
        if(w < 1680){
            $('.container2').css('height','990px');
            $('.container2 ').css('top','47%');
            $('.bg2').css('height','2296px');
            $('#wrapper').css('top','48.7%');
            $('body').css('height','840px');
        }else{
            $('.container2').css('height','1070px');
            $('.container2 ').css('top','32.3%');
            $('#wrapper').css('top','32%');
            $('.bg2').css('height','255vh');
        }
    });
}

/***********
 SLIDE LEFT
************/
function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));    
    
    //*> optional
    countSlides();
    pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
    
    //*> optional 
    countSlides();
    pagination();
}
    
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}

//form태그안의 특정 타겟값을 가져와서 limit값까지만 감소, 증가시켜주는 함수
function countUpDown(target, type, limit){
    var v = Number(target.value);
    if(type == "minus"){
        if(v > limit){
            target.value = --v;
        }
    }else if(type == "plus"){
        if(v < limit){
            target.value = ++v;
        }
    }else{
        return;
    }
}