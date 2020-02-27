var sliderPrice = document.getElementById("Slider1");
var rangeSpan = document.getElementById("rangeSpan");
var value = sliderPrice.value.replace(";", "만원 ~ ");
rangeSpan.innerHTML = value + "만원";

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
    function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );
});

jQuery("#Slider1").slider(
    { 
        from: 100000, 
        to: 1000000, 
        step: 10000, 
        smooth: true, 
        round: 0, 
        dimension: "&nbsp;￦", 
        skin: "plastic",
        onstatechange: function( value ){ //값이 바뀌면 동작하는 함수
            value = value.replace(";", "만원 ~ ");
            document.getElementById("rangeSpan").innerHTML = value + "만원";
        } 
    }
);

//select event
$("#carSelector").change(function(){
    console.log(this.value);
    var v = this.value;
    if(v == 2){
        //현대자동차에 해당하는 select option들을 파싱
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='2'>소형</option>" +
                        "<option value='3'>중형</option>" +
                        "<option value='4'>대형</option>" + 
                        "<option value='5'>SUV</option>";
        $("#carType").empty().append(carType);
    }else if(v == 3){
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='6'>경형</option>" +
                        "<option value='7'>소형</option>" +
                        "<option value='8'>중형</option>" +
                        "<option value='9'>대형</option>" + 
                        "<option value='10'>SUV</option>";
        $("#carType").empty().append(carType);
    }else if(v == 4){
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='11'>경형</option>" +
                        "<option value='12'>중형</option>" +
                        "<option value='13'>SUV</option>";
        $("#carType").empty().append(carType);
    }else if(v == 5){
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='14'>중형</option>" +
                        "<option value='15'>SUV</option>";
        $("#carType").empty().append(carType);
    }else if(v == 6){
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='16'>SUV</option>";
        $("#carType").empty().append(carType);
    }else if(v == 7){
        var carType = "<option value='1'>차량 유형 선택</option>" +
                        "<option value='17'>중형</option>" +
                        "<option value='18'>대형</option>";
        $("#carType").empty().append(carType);
    }
});
$("#carType").change(function(){
    console.log(this.value);
    var v2 = this.value;
    if(v2 == 2){
        var carKind = "<option value='19'>아반떼</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 3){
        var carKind = "<option value='20'>쏘나타</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 4){
        var carKind = "<option value='21'>GENESIS G80</option>"+
                        "<option value='21'>그랜저</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 5){
        var carKind = "<option value='22'>코나</option>"+
                        "<option value='22'>싼타페</option>"+
                        "<option value='22'>투싼</option>"+
                        "<option value='22'>펠리세이드</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 6){
        var carKind = "<option value='23'>모닝</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 7){
        var carKind = "<option value='24'>K3</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 8){
        var carKind = "<option value='25'>차량 선택</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 9){
        var carKind = "<option value='26'>K7</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 10){
        var carKind = "<option value='27'>스포티지</option>"+
                        "<option value='27'>쏘렌토</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 11){
        var carKind = "<option value='28'>스파크</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 12){
        var carKind = "<option value='29'>말리부</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 13){
        var carKind = "<option value='30'>이쿼녹스</option>"+
                        "<option value='30'>트랙스</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 14){
        var carKind = "<option value='31'>SM6</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 15){
        var carKind = "<option value='32'>QM6</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 16){
        var carKind = "<option value='33'>렉스턴</option>"+
                        "<option value='33'>코란도</option>"+
                        "<option value='33'>티볼리</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 17){
        var carKind = "<option value='34'>TESLA MODEL 3</option>";
        $("#carKind").empty().append(carKind);
    }else if(v2 == 18){
        var carKind = "<option value='35'>TESLA MODEL S</option>"+
                        "<option value='35'>TESLA MODEL X</option>";
        $("#carKind").empty().append(carKind);
    }
});

$(".checkTic").click(function(){
    $("#ex_chk8, #ex_chk88").prop('checked', false);
});
$("#ex_chk8, #ex_chk88").click(function(){
    $(".checkTic").prop('checked', false);
});

// datepicker
function createDatePicker(){
    $( "#datepicker1, #datepicker2" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date()
    })
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
    $("#long").click(function(){
        $('#long').css({'background-color':'rgb(36, 42, 58)', 'color':'#ffffff'});
        $('#shot').css({'background-color':'#ffffff', 'color':'rgb(36, 42, 58)'});
        $('.RentalContainer2').css('display','none');
        $('.RentalContainer').css('display','block');

        var w = $(window).width();
        if(w < 1680){
            $('.container2').css('height','1040px');
            $('.container2').css('top','45%');
            $('#wrapper').css('top','41.5%');
            $('.bg2').css('height','2300px');
            $('body').css('height','900px');
        }else{
            $('.container2').css('height','1150px');
            $('.container2').css('top','15%');
            $('#wrapper').css('top','15%');
            $('body').css('height','180vh');
            $('.bg2').css('height','270vh');
            $('.dott, .dott3').css('bottom','-60px');
            $('.bar, .bar2, .bar3, .bar4').css({'top':'-178px', 'height':'215px' });
        }
    });

    $("#shot").click(function(){
        $('#shot').css({'background-color':'rgb(36, 42, 58)', 'color':'#ffffff'});
        $('#long').css({'background-color':'#ffffff', 'color':'rgb(36, 42, 58)'});
        $('.RentalContainer').css('display','none');
        $('.RentalContainer2').css('display','block');

        var w = $(window).width();
        if(w < 1680){
            $('.container2').css('height','900px');
            $('.container2').css('top','38.5%');
            $('#wrapper').css('top','45.2%');
            $('.bg2').css('height','2200px');
            //$('body').css('height','900px');
        }else{
            $('.container2').css('height','990px');
            $('.container2').css('top','18%');
            $('#wrapper').css('top','20%');
            $('body').css('height','150vh');
            $('.bg2').css('height','245vh');
            $('.dott, .dott3').css('bottom','-20px');
            $('.bar, .bar2, .bar3, .bar4').css({'top':'-136px', 'height':'172px' });
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