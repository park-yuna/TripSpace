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
        title : "Paris",
        subTitle : "모든 여행자들의 로망",
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
        title : "Croatia",
        subTitle : "유럽의 숨은 Best 여행지",
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
        title : "Iceland",
        subTitle : "자연이 준 최고의 선물",
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
        title : "Interlaken",
        subTitle : "알프스로 떠나자! 스위스 인터라켄 여행",
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
        imgUrl1 : "img/europeBest1.jpg",
        imgUrl2 : "img/europeBest2.jpg",
        imgUrl3 : "img/europeBest3.jpg",
        num1 : "1",
        tourTitle1 : "이탈리아 일주 6~12일",
        tourTitle2 : "서유럽 3/4/5개국 10일",
        tourTitle3 : "영국 완전일주",
        tourDetail1 : "전문가가 동행하여 조금 더 깊이있는 지식과 알찬 여행을 할 수 있는 상품입니다.",
        tourDetail2 : "서유럽 핵심국가(프랑스,스위스,이탈리아,영국)를 여행하는 알차고 저렴한 가성비 갑!",
        tourDetail3 : "런던 핵심관광을 포함한 영국 일주 상품입니다. 런던과 런던근교 핵심 명소들을 여유있게 돌아보는 일정!",
        price1 : "1,899,900원~",
        price2 : "1,799,900원~",
        price3 : "2,199,900원~",
    },
    {
        imgUrl1 : "img/europeBest4.jpg",
        imgUrl2 : "img/europeBest5.jpg",
        imgUrl3 : "img/europeBest6.jpg",
        num1 : "1",
        tourTitle1 : "오스트리아/체코 2개국 9일",
        tourTitle2 : "북유럽/발트 5국 10일",
        tourTitle3 : "스페인/포르투갈/모로코 12~13일",
        tourDetail1 : "여유있는 두나라 여행으로 오스트리아, 체코를 한눈에 여행할 수 있는 패키지 상품입니다.",
        tourDetail2 : "꿈꾸던 북유럽 여행! 감성적이고 여유로운 북유럽 여행을 고객님께 강력 추천합니다!",
        tourDetail3 : "스페인과 포르투갈과 북아프리카 모로코의 핵심 관광지를 알뜰한 요금으로 관광합니다.",
        price1 : "1,752,000원~",
        price2 : "2,449,700원~",
        price3 : "1,994,000원~",
    },
    {
        imgUrl1 : "img/europeBest7.jpg",
        imgUrl2 : "img/europeBest8.jpg",
        imgUrl3 : "img/europeBest9.jpg",
        num1 : "1",
        tourTitle1 : "스페인일주 8~9일",
        tourTitle2 : "영국/프랑스 일주 6~9일",
        tourTitle3 : "정통 발칸 완전 일주 12일",
        tourDetail1 : "스페인의 핵심도시! 마드리드, 발렌시아와 바르셀로나까지 9일동안 알차게 관광하는 상품입니다.",
        tourDetail2 : "2개국 깊이보기! 영국과 프랑스의 핵심 관광지는 물론 런던, 파리 근교까지 여유롭고 깊이있게 관광합니다.",
        tourDetail3 : "보다 특이한 지역의 관광을 원하시는 분들을 위한 발칸반도를 중심으로 만들어진 상품입니다. ",
        price1 : "1,649,000원~",
        price2 : "2,999,700원~",
        price3 : "2,897,200원~",
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
        $("#mapImg").attr("src", "./img/europeSub1-1.png");
        $("#mapImg").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg").attr("src", "img/europeSub1.jpg");
        $("#mapImg").css("filter", "none");
    });
    $("#workBox2").hover(function(){
        $("#mapImg2").attr("src", "./img/europeSub2-1.png");
        $("#mapImg2").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg2").attr("src", "img/europeSub2.jpg");
        $("#mapImg2").css("filter", "none");
    });
    $("#workBox3").hover(function(){
        $("#mapImg3").attr("src", "./img/europeSub3-1.png");
        $("#mapImg3").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg3").attr("src", "img/europeSub3.jpg");
        $("#mapImg3").css("filter", "none");
    });
    $("#workBox4").hover(function(){
        $("#mapImg4").attr("src", "./img/europeSub4-1.png");
        $("#mapImg4").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg4").attr("src", "img/europeSub4.jpg");
        $("#mapImg4").css("filter", "none");
    });
    $("#workBox5").hover(function(){
        $("#mapImg5").attr("src", "./img/europeSub5-1.png");
        $("#mapImg5").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg5").attr("src", "img/europeSub5.jpg");
        $("#mapImg5").css("filter", "none");
    });
    $("#workBox6").hover(function(){
        $("#mapImg6").attr("src", "./img/europeSub6-1.png");
        $("#mapImg6").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg6").attr("src", "img/europeSub6.jpg");
        $("#mapImg6").css("filter", "none");
    });
    $("#workBox7").hover(function(){
        $("#mapImg7").attr("src", "./img/europeSub6-1.png");
        $("#mapImg7").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg7").attr("src", "img/EuropeSub7.jpg");
        $("#mapImg7").css("filter", "none");
    });
    $("#workBox8").hover(function(){
        $("#mapImg8").attr("src", "./img/europeSub3-1.png");
        $("#mapImg8").css("filter", "brightness(50%)");
    }, function(){
        $("#mapImg8").attr("src", "img/EuropeSub8.jpg");
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