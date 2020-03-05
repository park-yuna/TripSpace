var slideIndex = -1;
var arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left');
var slideTimer;
var bestIndex = 0;
var nowBest = 1;
var nextBest = 2;

var maxValue = null; //페이지의 높이값을 담을 변수

var pageInfo =  [
    {
        back : "item1",
        title : "유-럽 다드림",
        subTitle : "유럽 여행에 필요한 할인에 특전 다 드림!",
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
        title : "텐텐특가",
        subTitle : "동남아 대표 10개 도시 파.격.할.인",
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
        title : "시드니 TOP4",
        subTitle : "대표 어트랙션과 함께 즐거운 시드니 여행",
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
        title : "천원픽업",
        subTitle : "공항 갈 때, 공항 올 때 단 돈 천원!",
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
        imgUrl1 : "img/passSub7.jpg",
        imgUrl2 : "img/passSub2.jpg",
        imgUrl3 : "img/passSub3.jpg",
        num1 : "1",
        tourTitle1 : "시드니",
        tourTitle2 : "런던",
        tourTitle3 : "파리",
        tourDetail1 : "블루마운틴 감성 선셋 투어(킹스테이블랜드선셋+트랙킹+시티투어+비자무료)",
        tourDetail2 : "런던 아이 우선 탑승권 with 샴페인을 증정해드립니다! (Champagne Experience)",
        tourDetail3 : "NEW 파리 뮤지엄 패스 4일권을 만날 수 있는 기회!(몽파르나스 타워 입장권 무료증정)",
        price1 : "53,900원~",
        price2 : "59,900원~",
        price3 : "78,400원~",
    },
    {
        imgUrl1 : "img/passSub4.jpg",
        imgUrl2 : "img/passSub5.jpg",
        imgUrl3 : "img/passSub6.jpg",
        num1 : "1",
        tourTitle1 : "로스엔젤레스",
        tourTitle2 : "방콕",
        tourTitle3 : "보라카이",
        tourDetail1 : "이번 휴가는 유니버설 스튜디오로 떠나자! 헐리우드 일반권 (1일권 가격으로 2일 방문가능)",
        tourDetail2 : "떠오르는 인스타 핫플 투어! 마하나콘 킹파워 타워 스카이워크로 지금 떠나보세요!",
        tourDetail3 : "에메랄드빛 바다 보라카이! 칼리보공항 BK 라운지 + 보딩서비스를 한번에 만나보세요!",
        price1 : "152,000원~",
        price2 : "89,700원~",
        price3 : "10,000원~",
    },
    {
        imgUrl1 : "img/passSub1.jpg",
        imgUrl2 : "img/passSub8.jpg",
        imgUrl3 : "img/passSub9.jpg",
        num1 : "1",
        tourTitle1 : "베네치아",
        tourTitle2 : "세비야",
        tourTitle3 : "로마",
        tourDetail1 : "베니스에서 여유를 즐기세요! 마르코폴로 공항 픽업or샌딩(이탈리아/베네치아) / 편도 상품입니다.",
        tourDetail2 : "신개념 자유여행! 조이버스로 즐기는 색다른 유럽이 기다린다!(이동편+AVE열차/숙박옵션)",
        tourDetail3 : "영화 속 명소를 만날 수 있는 기회! 친퀘테레(라 스페치아)/피사 1일 (이동편/숙박옵션)",
        price1 : "109,000원~",
        price2 : "299,700원~",
        price3 : "177,200원~",
    },
];

$(document).ready(function(){
    evtFunc();
    showSlides();
    createDatePicker();


    $('countUp').countUp({
        'time': 800, //countUp태그로 감싼 숫자들이 동작하는 시간
        'delay': 10 //딜레이만큼 뒤에 시작함
    });


    $('.ac-sub-go-top').click(function(){//위로가기 버튼을 클릭했을때
        $('html, body').animate({
          scrollTop: '0'
        }, 700);
    });
});



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

        $("#price1 countUp").html(price1);
        $("#price2 countUp").html(price2);
        $("#price3 countUp").html(price3);

        $('countUp').countUp({
            'time': 800, //countUp태그로 감싼 숫자들이 동작하는 시간
            'delay': 10 //딜레이만큼 뒤에 시작함
        });


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

        $("#price1 countUp").html(price1);
        $("#price2 countUp").html(price2);
        $("#price3 countUp").html(price3);

        $('countUp').countUp({
            'time': 800, //countUp태그로 감싼 숫자들이 동작하는 시간
            'delay': 10 //딜레이만큼 뒤에 시작함
        });

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
    $( "#datepicker4" ).datepicker({
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