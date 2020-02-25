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
        title : "New York",
        subTitle : "NewYork! NewYork! 꿈 같은 도시",
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
        title : "California",
        subTitle : "눈부신 햇살 속 대자연의 아름다움",
        view : "4316",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.6 / 5"
    },
    {
        back : "item3",
        title : "Salar de Uyuni",
        subTitle : "세상에서 가장 큰 거울 우유니 소금사막",
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
        title : "Havana",
        subTitle : "헤밍웨이가 사랑한 쿠바",
        view : "2738",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.8 / 5"
    }
];

var BestInfo = [
    {
        imgUrl1 : "img/americaBest1.jpg",
        imgUrl2 : "img/americaBest2.jpg",
        imgUrl3 : "img/americaBest3.jpg",
        num1 : "1",
        tourTitle1 : "페루/쿠바/멕시코 10일",
        tourTitle2 : "뉴욕/워싱턴/나이아가라 8일",
        tourTitle3 : "캘리포니아에서 살아보기 15일",
        tourDetail1 : "올드카 탑승 포함! 페루 쿠바 멕시코 3개국 짧은 일정으로 정복하기!",
        tourDetail2 : "미국의 심장 뉴욕과 근교 대표도시 워싱턴, 나이아가라 관광 상품입니다.",
        tourDetail3 : "캘리포니아의 눈부신 햇살과 멋진 도시 그리고 대자연의 아름다움 속에서 여유롭게 살아보기",
        price1 : "5,049,900원~",
        price2 : "2,419,900원~",
        price3 : "2,627,200원~",
    },
    {
        imgUrl1 : "img/americaBest4.jpg",
        imgUrl2 : "img/americaBest5.jpg",
        imgUrl3 : "img/americaBest6.jpg",
        num1 : "1",
        tourTitle1 : "미국 서부와 동부 일주 13~15일",
        tourTitle2 : "중남미 버킷리스트 투어 5개국 12일",
        tourTitle3 : "캐나다 동부 완벽 일주 9일",
        tourDetail1 : "라스베이거스, 로스앤젤레스, 그랜드캐년 등 미국 서부와 동부의 핵심 관광지를 알차게 여행합니다.",
        tourDetail2 : "남미 3개국 및 하늘과 맞닿은 우유니 소금 사막까지 한번에 보는 일정이 포함되어있는 상품입니다.",
        tourDetail3 : "후기로 인정 받은 인기 상품! 세계3대폭포 나이아가라와 캐나다속 프랑스 퀘벡 완벽 관광",
        price1 : "1,352,000원~",
        price2 : "7,449,700원~",
        price3 : "1,394,000원~",
    },
    {
        imgUrl1 : "img/americaBest7.jpg",
        imgUrl2 : "img/americaBest8.jpg",
        imgUrl3 : "img/americaBest9.jpg",
        num1 : "1",
        tourTitle1 : "미국 서부 4대 캐년 8일~11일",
        tourTitle2 : "고품격 남미 4개국 13일",
        tourTitle3 : "밴쿠버 반달살기 14일",
        tourDetail1 : "Trip Space 미국 상품 중, 가장 오래도록 사랑 받은 베스트셀러 상품입니다.",
        tourDetail2 : "페루/브라질/아르헨티나/칠레 4개국 엄선된 특급 호텔과 왕복 비즈니스 탑승으로 누리는 프리미엄 남미 여행!",
        tourDetail3 : "살고싶은도시 No.1 캐나다 밴쿠버 웰니스 라이프 체험하기! (1개월교통패스포함)",
        price1 : "2,319,000원~",
        price2 : "11,999,700원~",
        price3 : "1,597,200원~",
    },
];

$(document).ready(function(){
    evtFunc();
    showSlides();
    createDatePicker();
 
    maxValue = $(".work-list").offset().top;
    //$("#floatMenu").css('top', maxValue+"px"); //처음 세팅
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
        $("#arrow-left, #arrow-right, .header, .display-section").css("display","none"); 
    });
    $("#press2").click(function(){
        $("#cfixed").css("display","block");
        $(".subNav3").css("display","block");
        $(".subNav2").css("display","none");
        $("#arrow-left, #arrow-right, .header, .display-section").css("display","none"); 
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
        $("#mapImg").attr("src", "./img/AmericaSub3-1.png");
        $("#mapImg").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg").attr("src", "img/americaSub1.jpg");
        $("#mapImg").css("filter", "none");
    });
    $("#workBox2").hover(function(){
        $("#mapImg2").attr("src", "./img/AmericaSub1-1.png");
        $("#mapImg2").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg2").attr("src", "img/americaSub2.jpg");
        $("#mapImg2").css("filter", "none");
    });
    $("#workBox3").hover(function(){
        $("#mapImg3").attr("src", "./img/AmericaSub2-1.png");
        $("#mapImg3").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg3").attr("src", "img/americaSub3.jpg");
        $("#mapImg3").css("filter", "none");
    });
    $("#workBox4").hover(function(){
        $("#mapImg4").attr("src", "./img/AmericaSub1-1.png");
        $("#mapImg4").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg4").attr("src", "img/americaSub4.jpg");
        $("#mapImg4").css("filter", "none");
    });
    $("#workBox5").hover(function(){
        $("#mapImg5").attr("src", "./img/AmericaSub4-1.png");
        $("#mapImg5").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg5").attr("src", "img/americaSub5.jpg");
        $("#mapImg5").css("filter", "none");
    });
    $("#workBox6").hover(function(){
        $("#mapImg6").attr("src", "./img/AmericaSub1-1.png");
        $("#mapImg6").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg6").attr("src", "img/americaSub6.jpg");
        $("#mapImg6").css("filter", "none");
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
    })
}