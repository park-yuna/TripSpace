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
        title : "South Africa",
        subTitle : "희망의 땅에서 오감을 충족하다!",
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
        title : "Kenya",
        subTitle : "케냐의 사파리 국립공원",
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
        title : "Tanzania",
        subTitle : "세상의 끝에 선듯한 기분",
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
        title : "India",
        subTitle : "인도여행, 어디까지 알고가니?",
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
        imgUrl1 : "img/africaBest1.jpg",
        imgUrl2 : "img/africaBest2.jpg",
        imgUrl3 : "img/africaBest3.jpg",
        num1 : "1",
        tourTitle1 : "케이프타운 6일",
        tourTitle2 : "아프리카 4개국 8일",
        tourTitle3 : "북인도여행 9일",
        tourDetail1 : "아프리카에서 만나는 유럽의 정취! 도시와 자연이 공존하는 매력적인 그 곳! 케이프타운으로 떠나보세요.",
        tourDetail2 : "Trip Space의 차별화된 패키지 일정으로 남아공, 빅토리아폭포, 보츠와나 사파리를 관광합니다.",
        tourDetail3 : "인도 여행, 어디까지 알고 가니? 인도중북부와 갠지스강의 바라나시를 방문하는 여행일정입니다.",
        price1 : "5,729,900원~",
        price2 : "4,901,900원~",
        price3 : "6,983,400원~",
    },
    {
        imgUrl1 : "img/africaBest4.jpg",
        imgUrl2 : "img/africaBest5.jpg",
        imgUrl3 : "img/africaBest6.jpg",
        num1 : "1",
        tourTitle1 : "탄자니아 9일",
        tourTitle2 : "두바이 완전정복 5~6일",
        tourTitle3 : "사하라/두바이/아부다비 12일",
        tourDetail1 : "아프리카 최고의 사파리 세렝게티와 휴양 지상 낙원 잔지바르를 방문하는 상품입니다.",
        tourDetail2 : "국적기를 이용한 두바이 & 아부다비를 여행 할 수 있는 일주 5일 일정 상품입니다.",
        tourDetail3 : "북아프리카의 붉은 보석 모로코 까지 한번에 볼 수 있는 베스트 셀러 상품입니다.",
        price1 : "3,752,000원~",
        price2 : "2,449,700원~",
        price3 : "2,604,000원~",
    },
    {
        imgUrl1 : "img/africaBest7.jpg",
        imgUrl2 : "img/africaBest8.jpg",
        imgUrl3 : "img/africaBest9.jpg",
        num1 : "1",
        tourTitle1 : "동남부 아프리카 6개국 13~14일",
        tourTitle2 : "이집트일주 일주 8-10일",
        tourTitle3 : "이스라엘 완전일주 9일",
        tourDetail1 : "인생 단 한번 아프리카를 떠난다면 바로 이 상품! 여행의 양과 질이 충족되는 즐거운 여행입니다.",
        tourDetail2 : "이집트 고대 역사 유물인 스핑크스, 피라미드와 두바이 여행까지 가능한 일정입니다.",
        tourDetail3 : "지중해와 홍해를 가진 축복의땅에서 성지순례를! 이스라엘을 완전 일주 하는 상품입니다.",
        price1 : "3,649,000원~",
        price2 : "4,999,700원~",
        price3 : "2,577,200원~",
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
        $("#mapImg").attr("src", "./img/africaSub1-1.png");
        $("#mapImg").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg").attr("src", "img/africaSub1.jpg");
        $("#mapImg").css("filter", "none");
    });
    $("#workBox2").hover(function(){
        $("#mapImg2").attr("src", "./img/africaSub2-1.png");
        $("#mapImg2").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg2").attr("src", "img/africaSub2.jpg");
        $("#mapImg2").css("filter", "none");
    });
    $("#workBox3").hover(function(){
        $("#mapImg3").attr("src", "./img/africaSub3-1.png");
        $("#mapImg3").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg3").attr("src", "img/africaSub3.jpg");
        $("#mapImg3").css("filter", "none");
    });
    $("#workBox4").hover(function(){
        $("#mapImg4").attr("src", "./img/africaSub2-1.png");
        $("#mapImg4").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg4").attr("src", "img/africaSub4.jpg");
        $("#mapImg4").css("filter", "none");
    });
    $("#workBox5").hover(function(){
        $("#mapImg5").attr("src", "./img/africaSub4-1.png");
        $("#mapImg5").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg5").attr("src", "img/africaSub5.jpg");
        $("#mapImg5").css("filter", "none");
    });
    $("#workBox6").hover(function(){
        $("#mapImg6").attr("src", "./img/africaSub5-1.png");
        $("#mapImg6").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg6").attr("src", "img/africaSub6.jpg");
        $("#mapImg6").css("filter", "none");
    });
    $("#workBox7").hover(function(){
        $("#mapImg7").attr("src", "./img/africaSub5-1.png");
        $("#mapImg7").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg7").attr("src", "img/AfricaSub7.jpg");
        $("#mapImg7").css("filter", "none");
    });
    $("#workBox8").hover(function(){
        $("#mapImg8").attr("src", "./img/africaSub3-1.png");
        $("#mapImg8").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg8").attr("src", "img/AfricaSub8.jpg");
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