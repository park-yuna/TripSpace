var slideIndex = -1;
var arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left');
var slideTimer;
var bestIndex = 0;
var nowBest = 1;
var nextBest = 2;

var slider = document.getElementById("sliderBar");
var output = document.getElementById("demo");
    output.innerHTML = slider.value + "만원";

    slider.oninput = function(){
        output.innerHTML = this.value + "만원";
    }

var maxValue = null; //페이지의 높이값을 담을 변수

var pageInfo =  [
    {
        back : "item1",
        title : "Da Nang",
        subTitle : "알수록 마음이 끌리는 그 곳",
        view : "5819",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.6 / 5"
    },
    {
        back : "item2",
        title : "Cambodia",
        subTitle : "천혜의 자연이 펼쳐지는",
        view : "4316",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.5 / 5"
    },
    {
        back : "item3",
        title : "Nha Trang",
        subTitle : "2020 휴양지의 여왕",
        view : "3245",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.9 / 5"
    },
    {
        back : "item4",
        title : "Hong Kong",
        subTitle : "열정과 가능성이 눈앞에 펼쳐지는 곳",
        view : "2738",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.7 / 5"
    }
];

var BestInfo = [
    {
        imgUrl1 : "img/asiaBest1.jpg",
        imgUrl2 : "img/asiaBest2.jpg",
        imgUrl3 : "img/asiaBest3.jpg",
        num1 : "1",
        tourTitle1 : "미얀마 5일~6일",
        tourTitle2 : "라오스 5일",
        tourTitle3 : "몰디브 이나후라 리조트 7일",
        tourDetail1 : "그동안 동남아에서 느낄 수 없었던 감동! 웅장한 호수위의 평화로운 미얀마의 색다름을 경험해보세요.",
        tourDetail2 : "시간이 멈춘 나라, 라오스! 그림속을 여행하는 듯한 착각에 빠지게 만드는 자연의 절경을 만끽하세요.",
        tourDetail3 : "5성급 이상 리조트로 구성된 몰디브 7일 럭셔리 패키지 상품으로 여유로움을 만끽하세요.5성급 이상 리조트로 구성된 몰디브 7일 럭셔리 패키지 상품으로 여유로움을 만끽하세요.",
        price1 : "750,000원~",
        price2 : "989,900원~",
        price3 : "3,799,900원~",
    },
    {
        imgUrl1 : "img/asiaBest4.jpg",
        imgUrl2 : "img/asiaBest5.jpg",
        imgUrl3 : "img/asiaBest6.jpg",
        num1 : "1",
        tourTitle1 : "발리 5일",
        tourTitle2 : "대만 5일",
        tourTitle3 : "치앙마이 3~4일",
        tourDetail1 : "먹고 기도하고 사랑하라! 발리에서 꼭 가봐야 할 명소 방문 일정으로 채워진 대표 관광형 상품입니다.",
        tourDetail2 : "대만에서 진정한 패키지 여행을 즐길 수 있도록 부담 Zero에 도전하는 강력 추천 상품 입니다.",
        tourDetail3 : "당신의 바쁜 일상에 낭만과 여유를 선사할 감성여행지 치앙마이! 지금은 치앙마이로 떠나야 할 때!",
        price1 : "2,352,000원~",
        price2 : "889,700원~",
        price3 : "1,394,000원~",
    },
    {
        imgUrl1 : "img/asiaBest7.jpg",
        imgUrl2 : "img/asiaBest8.jpg",
        imgUrl3 : "img/asiaBest9.jpg",
        num1 : "1",
        tourTitle1 : "홍콩/마카오 4일",
        tourTitle2 : "방콕/파타야 5~6일",
        tourTitle3 : "캄보디아 앙코르왓 5일",
        tourDetail1 : "프리미엄 5성급 호텔 투숙과, 국적기 항공 사용, 제우스 전속 가이드와 함께하는 프리미엄 여행 상품입니다.",
        tourDetail2 : "엄선된 식사,호텔과 여유로운 일정, 현지 부담은 확! 줄인 프리미엄 패키지 실속 상품입니다.",
        tourDetail3 : "캄보디아에서 꼭 가봐야 할 일급 리조트로 실속있는 여행을 선호하는 분에게 추천하는 상품입니다.",
        price1 : "2,130,000원~",
        price2 : "2,271,700원~",
        price3 : "1,347,200원~",
    },
];

$(document).ready(function(){
    evtFunc();
    showSlides();
    createDatePicker();
 
    maxValue = $(".work-list").offset().top;
    $("#floatMenu").css('top', maxValue+"px"); //처음 세팅
    action();

    $('countUp').countUp({
        'time': 700, //countUp태그로 감싼 숫자들이 동작하는 시간
        'delay': 10 //딜레이만큼 뒤에 시작함
    });


    $('.ac-sub-go-top').click(function(){//위로가기 버튼을 클릭했을때
        $('html, body').animate({
          scrollTop: '0'
        }, 700);
    });

    //로드가 완료되면 workImg의 높이값을 가져와서 frame들의 높이를 지정해준다.
    // var wImgHeight = $(".workImg").height();
    // $(".workBox").css("height", wImgHeight + "px");
});


function action(){
    //스크롤 이벤트가 발생하면 동작
    $(window).scroll(function() { 
        var scrollTop = $(window).scrollTop(); //현재 스크롤의 위치값
        var footerTop = $(".footer_box").offset().top; //바닥 푸터 위치값
        var menuHeight = $(".container4").height(); //메뉴의 높이
        
        if (scrollTop + menuHeight + 50 > footerTop){
            //바닥 푸터 위치+메뉴높이+50 스크롤보다 크면 멈춘다. 
            return;
        }else if(scrollTop > maxValue){ //화면의 절반값보다 밑으로 내려오면 동작
            //var newPosition = (scrollTop-maxValue) + maxValue + "px";
            var newPosition = scrollTop + "px";
            $("#floatMenu").stop().animate({
                "top" : newPosition
            }, 500);
        }


        var quickHeight=$(document).scrollTop(); //스크롤 높이가 500 이상이면 나타나기
        if (1100 <= quickHeight ) {
                $('.ac-sub-go-top').css('display','block');
            }else {
                $('.ac-sub-go-top').css('display','none');
            }
           
    }).scroll();
}


function evtFunc(){
    $("#under1").hover(function(){
        $("#under2, #under3, #under4, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under2, #under3, #under4, #under5").css('color','#ffffff');
    });

    $("#under2").hover(function(){
        $("#under1, #under3, #under4, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under3, #under4, #under5").css('color','#ffffff');
    });

    $("#under3").hover(function(){
        $("#under1, #under2, #under4, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under2, #under4, #under5").css('color','#ffffff');
    });

    $("#under4").hover(function(){
        $("#under1, #under2, #under3, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under2, #under3, #under5").css('color','#ffffff');
    });

    $("#under5").hover(function(){
        $("#under1, #under2, #under3, #under4").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under2, #under3, #under4").css('color','#ffffff');
    });

    $("#under11").hover(function(){
        $("#under11").css("border-bottom","1px solid #ffffff");
    }, function(){
        $("#under11").css("border-bottom","none");
    });
    $(".under22").hover(function(){
        $(".under22").css("border-bottom","1px solid #ffffff");
    }, function(){
        $(".under22").css("border-bottom","none");
    });
    $(".under33").hover(function(){
        $(".under33").css("border-bottom","1px solid #ffffff");
    }, function(){
        $(".under33").css("border-bottom","none");
    });
    $(".under44").hover(function(){
        $(".under44").css("border-bottom","1px solid #ffffff");
    }, function(){
        $(".under44").css("border-bottom","none");
    });
    $(".under55").hover(function(){
        $(".under55").css("border-bottom","1px solid #ffffff");
    }, function(){
        $(".under55").css("border-bottom","none");
    });

    //Left arrow click
    arrowLeft.addEventListener('click',function(){
        clearTimeout(slideTimer);
        slideLeft();
        slideTimer = setTimeout(showSlides, 4000);
    });

    //Right arrow click
    arrowRight.addEventListener('click',function(){
        clearTimeout(slideTimer);
        slideRight();
        slideTimer = setTimeout(showSlides, 4000);
    });

    $("#slide-right").click(function(){
        bestIndex++;
        if(bestIndex >= BestInfo.length){
            bestIndex = 0;
        }
        nowBest++;
        if(nowBest > BestInfo.length){
            nowBest = 1;
        }
        nextBest++;
        if(nextBest > BestInfo.length){
            nextBest = 1;
        }


        var imgUrl1 = BestInfo[bestIndex].imgUrl1;
        var imgUrl2 = BestInfo[bestIndex].imgUrl2;
        var imgUrl3 = BestInfo[bestIndex].imgUrl3;

        var tourTitle1 = BestInfo[bestIndex].tourTitle1;
        var tourTitle2 = BestInfo[bestIndex].tourTitle2;
        var tourTitle3 = BestInfo[bestIndex].tourTitle3;

        var tourDetail1 = BestInfo[bestIndex].tourDetail1;
        var tourDetail2 = BestInfo[bestIndex].tourDetail2;
        var tourDetail3 = BestInfo[bestIndex].tourDetail3;

        var price1 = BestInfo[bestIndex].price1;
        var price2 = BestInfo[bestIndex].price2;
        var price3 = BestInfo[bestIndex].price3;

        //attr(속성, 속성값)
        $("#bestImg1").attr("src", imgUrl1);
        $("#bestImg2").attr("src", imgUrl2);
        $("#bestImg3").attr("src", imgUrl3);
        $("#num1").html(nowBest);
        $("#num3").html(nextBest);
        $("#tourTitle1").html(tourTitle1);
        $("#tourTitle2").html(tourTitle2);
        $("#tourTitle3").html(tourTitle3);
        $("#tourDetail1").html(tourDetail1);
        $("#tourDetail2").html(tourDetail2);
        $("#tourDetail3").html(tourDetail3);

        $("#price1").html(price1);
        $("#price2").html(price2);
        $("#price3").html(price3);

    });

    $("#slide-left").click(function(){
        bestIndex--;
        if(bestIndex < 0){
            bestIndex = BestInfo.length -1;
        }
        nowBest--;
        if(nowBest <= 0){
            //nowBest = BestInfo.length;
            nowBest = 3;
        }
        nextBest--;
        if(nextBest <= 0){
            //nextBest = BestInfo.length;
            nextBest = 3;
        }

        var imgUrl1 = BestInfo[bestIndex].imgUrl1;
        var imgUrl2 = BestInfo[bestIndex].imgUrl2;
        var imgUrl3 = BestInfo[bestIndex].imgUrl3;

        var tourTitle1 = BestInfo[bestIndex].tourTitle1;
        var tourTitle2 = BestInfo[bestIndex].tourTitle2;
        var tourTitle3 = BestInfo[bestIndex].tourTitle3;

        var tourDetail1 = BestInfo[bestIndex].tourDetail1;
        var tourDetail2 = BestInfo[bestIndex].tourDetail2;
        var tourDetail3 = BestInfo[bestIndex].tourDetail3;

        var price1 = BestInfo[bestIndex].price1;
        var price2 = BestInfo[bestIndex].price2;
        var price3 = BestInfo[bestIndex].price3;


        //attr(속성, 속성값)
        $("#bestImg1").attr("src", imgUrl1);
        $("#bestImg2").attr("src", imgUrl2);
        $("#bestImg3").attr("src", imgUrl3);
        $("#num1").html(nowBest);
        $("#num3").html(nextBest);
        $("#tourTitle1").html(tourTitle1);
        $("#tourTitle2").html(tourTitle2);
        $("#tourTitle3").html(tourTitle3);
        $("#tourDetail1").html(tourDetail1);
        $("#tourDetail2").html(tourDetail2);
        $("#tourDetail3").html(tourDetail3);

        $("#price1").html(price1);
        $("#price2").html(price2);
        $("#price3").html(price3);

    });

    $("#rightArrow").hover(function(){
        $("#rightCircle").css("display","block");
    }, function(){
        $("#rightCircle").css("display","none");
    });

    $("#leftArrow").hover(function(){
        $("#leftCircle").css("display","block");
    }, function(){
        $("#leftCircle").css("display","none");
    });


    $("#press1").click(function(){
        $("#cfixed").css("display","block");
        $(".subNav3").css("display","none");
        $("#arrow-left, #arrow-right, .header, .display-section, .display-section2").css("display","none"); 
    });
    $("#press2").click(function(){
        $("#cfixed").css("display","block");
        $(".subNav3").css("display","block");
        $(".subNav2").css("display","none");
        $("#arrow-left, #arrow-right, .header, .display-section, .display-section2").css("display","none"); 
    });
    $("#overnav").click(function(){
        $(".subNav2").css("display","none");
        $(".subNav3").css("display","block");
        $("#display-section2").css("display","none");
        $(".container2").css("display","none");
    });
    $("#overnav2").click(function(){
        $(".subNav2, .subNav3").css("display","none");
        $(".container2").css("display","block");
        $("#display-section2").css("display","block");
    });
    $("#closeBtn").click(function(){
        $("#cfixed").css("display","none");
        $("#arrow-left, #arrow-right, .header, .display-section").css("display","block");
    });
    $("#under11").click(function(){
        $(".subNav2").css("display","block");
        $(".subNav3").css("display","none");
        $("#display-section2").css("display","none");
    });
    
    
    $("#workBox1").hover(function(){
        $("#mapImg").attr("src", "./img/AsiaSub1-1.png");
        $("#mapImg").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg").attr("src", "./img/AsiaSub1.jpg");
        $("#mapImg").css("filter", "none");
    });
    $("#workBox2").hover(function(){
        $("#mapImg2").attr("src", "./img/AsiaSub2-1.png");
        $("#mapImg2").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg2").attr("src", "./img/AsiaSub2.jpg");
        $("#mapImg2").css("filter", "none");
    });
    $("#workBox3").hover(function(){
        $("#mapImg3").attr("src", "./img/AsiaSub1-1.png");
        $("#mapImg3").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg2").attr("src", "./img/AsiaSub3.jpg");
        $("#mapImg2").css("filter", "none");
    });
    $("#workBox4").hover(function(){
        $("#mapImg4").attr("src", "./img/AsiaSub4-1.png");
        $("#mapImg4").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg4").attr("src", "./img/AsiaSub4.jpg");
        $("#mapImg4").css("filter", "none");
    });
    $("#workBox5").hover(function(){
        $("#mapImg5").attr("src", "./img/AsiaSub5-1.png");
        $("#mapImg5").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg5").attr("src", "./img/AsiaSub5.jpg");
        $("#mapImg5").css("filter", "none");
    });
    $("#workBox6").hover(function(){
        $("#mapImg6").attr("src", "./img/AsiaSub6-1.png");
        $("#mapImg6").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg6").attr("src", "./img/AsiaSub6.jpg");
        $("#mapImg6").css("filter", "none");
    });
    $("#workBox7").hover(function(){
        $("#mapImg7").attr("src", "./img/AsiaSub6-1.png");
        $("#mapImg7").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg7").attr("src", "./img/AsiaSub7.jpg");
        $("#mapImg7").css("filter", "none");
    });
    $("#workBox8").hover(function(){
        $("#mapImg8").attr("src", "./img/AsiaSub1-1.png");
        $("#mapImg8").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg8").attr("src", "./img/AsiaSub8.jpg");
        $("#mapImg8").css("filter", "none");
    });
    
    $(".workBtn").click(function(){
        $(".work-list2").css("display","block");
        $(".workBtn").css("display","none");

        $('countUp2').countUp({
            'time': 700, //countUp태그로 감싼 숫자들이 동작하는 시간
            'delay': 10 //딜레이만큼 뒤에 시작함
        });
    });
}

//autoSlide
function showSlides() {     
    slideIndex++;
    if(slideIndex >= pageInfo.length ){
        slideIndex = 0;
    }
    viewPage(slideIndex);
    
    slideTimer = setTimeout(showSlides, 4000); 
}

function viewPage(idx){
    var back = pageInfo[idx].back;
    var title = pageInfo[idx].title;
    var subTitle = pageInfo[idx].subTitle;
    var view = pageInfo[idx].view;
    var star = pageInfo[idx].star;
    var score = pageInfo[idx].score;
    
    $(".slider--item").removeClass().addClass("slider--item " + back + " fade");
    $("#sec-tit").html(title);
    $("#sec-sub").html(subTitle);
    $("#viewsN").html(view);
    $("#starForm").html(star);
    $("#score").html(score);
}

// show prev
function slideLeft(){
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = pageInfo.length - 1;
    }
    viewPage(slideIndex);
}

// show next
function slideRight(){
    slideIndex++;
    if(slideIndex >= pageInfo.length ){
        slideIndex = 0;
    }
    viewPage(slideIndex);
}

// datepicker
function createDatePicker(){
    $( "#datepicker1, #datepicker2, #datepicker3" ).datepicker({
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