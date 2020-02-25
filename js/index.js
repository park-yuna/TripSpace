var slideIndex = -1;
var arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left');
var slideTimer;
var bestIndex = 0;
var nowBest = 1;
var nextBest = 2;
var cCnt = 0;

var pageInfo =  [
    {
        back : "item1",
        title : "Norway Oslo",
        subTitle : "몸과 마음을 리프레시 하는 겨울, 온천 여행",
        view : "3819",
        star : '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starRon"><i class="fas fa-star"></i></span>'+
                '<span class="starR"><i class="fas fa-star-half-alt"></i></span>',
        score : "4.6 / 5"
    },
    {
        back : "item2",
        title : "Iceland",
        subTitle : "환상적인 오로라의 경관, 요쿨살론",
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
        title : "Portland",
        subTitle : "느림과 간소함을 추구하는 곳, 오리건",
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
        title : "Mongolia",
        subTitle : "잊지못할 별 내리는 밤하늘",
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
        imgUrl1 : "img/blog4.jpg",
        imgUrl2 : "img/blog5.jpg",
        imgUrl3 : "img/blog6.jpg",
        num1 : "1",
        tourTitle1 : "미서부 4대 캐년 8~10일",
        tourTitle2 : "이탈리아 일주 6~12일",
        tourTitle3 : "스페인/포르투갈 8~10일",
        tourDetail1 : "미서부에서 가장 오랫동안 사랑 받아온 부동의 인기 NO.1 미서부 대표 베스트셀러 상품입니다.",
        tourDetail2 : "여유롭게 한나라만 즐길수 있는 이태리 완전일주 상품입니다. 깊이있는 여행을 즐기세요.",
        tourDetail3 : "지중해베스트셀러! 스페인 남부 전 지역부터 유럽 최서단 포르투갈을 알차게 관광하는 상품입니다.",
        price1 : "1,750,000원~",
        price2 : "1,989,900원~",
        price3 : "1,799,900원~",
    },
    {
        imgUrl1 : "img/blog7.jpg",
        imgUrl2 : "img/blog8.jpg",
        imgUrl3 : "img/blog9.jpg",
        num1 : "1",
        tourTitle1 : "미국 서부와 동부 일주 13~15일",
        tourTitle2 : "캄보디아 앙코르왓 5일",
        tourTitle3 : "달랏 & 무이네 패키지",
        tourDetail1 : "미국 서부와 동부를 한 번에 여행할 수 있는 패키지 상품입니다.",
        tourDetail2 : "일급 리조트로 실속있는 여행을 선호하는 분에게 추천하는 상품입니다.",
        tourDetail3 : "고산지대 <달랏>과 동남아 유일의 사막지대 <무이네>를 동시에 경험할 수 있는 아주 특별한 기회!",
        price1 : "3,250,000원~",
        price2 : "889,700원~",
        price3 : "1,394,000원~",
    },
    {
        imgUrl1 : "img/blog10.jpg",
        imgUrl2 : "img/blog11.jpg",
        imgUrl3 : "img/blog12.jpg",
        num1 : "1",
        tourTitle1 : "서유럽 핵심 5개국 10일",
        tourTitle2 : "중남미 한번에 보기 21일",
        tourTitle3 : "북유럽 4국9일",
        tourDetail1 : "유럽의 핵심국가인 프랑스/스위스/이태리/독일/오스트리아를 방문하는 서유럽 인기 일정입니다.",
        tourDetail2 : "멕시코,쿠바,칠레,아르헨티나,브라질,페루 주요 중남미 국가 방문하는 남미 인기 상품입니다.",
        tourDetail3 : "북유럽도 하나투어로 가면 특별하다!! 북유럽 베스트 상품이자 메인 상품입니다.",
        price1 : "4,830,000원~",
        price2 : "6,463,700원~",
        price3 : "5,327,200원~",
    },
];

$(document).ready(function(){
    evtFunc();
    showSlides();
    createDatePicker();
    action();

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

function action(){
    $(window).scroll(function () {
        var quickHeight=$(document).scrollTop(); //스크롤 높이가 500 이상이면 나타나기
        if (1100 <= quickHeight ) {
            $('.ac-sub-go-top').css('display','block');
        }else {
            $('.ac-sub-go-top').css('display','none');
        }
    });
   
    $('.ac-sub-go-top').click(function(){//위로가기 버튼을 클릭했을때
        $('html, body').animate({
            scrollTop: '0'
        }, 800);
    });
}


function evtFunc(){
    $("#under1").hover(function(){
        $('.subNav').css('display','block');
        $('.subNav2').css('display','none');
        $("#under2, #under3, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under2, #under3, #under5").css('color','#ffffff');
    });

    $('#under1').click(function(){
        $('.subNav').css('display','block');
        $('.subNav2').css('display','none');
    });

    $("#under2").hover(function(){
        $('.subNav2').css('display','block');
        $('.subNav').css('display','none');
        $("#under1, #under3, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under3, #under5").css('color','#ffffff');
    });

    $('#under2').click(function(){
        $('.subNav2').css('display','block');
        $('.subNav').css('display','none');
    });

    $("#under3").hover(function(){
        $('.subNav').css('display','none');
        $('.subNav2').css('display','none');
        $("#under1, #under2, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under2, #under5").css('color','#ffffff');
    });

    $("#under5").hover(function(){
        $('.subNav').css('display','none');
        $('.subNav2').css('display','none');
        $("#under1, #under2, #under3").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under2, #under3").css('color','#ffffff');
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
    console.log(slideIndex)
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
    $( "#datepicker1" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date()
    })
}

//amChart 지도 사용
//map
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    /* Create map instance */
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    /* Set map definition */
    chart.geodata = am4geodata_worldLow;
    
    /* Set projection */
    chart.projection = new am4maps.projections.Miller();
    
    /* Create map polygon series */
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    /* Make map load polygon (like country names) data from GeoJSON */
    polygonSeries.useGeodata = true;
    
    /* Configure series */
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.applyOnClones = true;
    polygonTemplate.togglable = true;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeOpacity = 0.5;
    polygonTemplate.fill = chart.colors.getIndex(0);
    var lastSelected;
    polygonTemplate.events.on("hit", function(ev) {
      if (lastSelected) {
        lastSelected.isActive = false;
      }
      ev.target.series.chart.zoomToMapObject(ev.target);
      if (lastSelected !== ev.target) {
        lastSelected = ev.target;
      }

      var areaName = ev.target.dataItem.dataContext.name;
      setTimeout(function(){
        var asiaArr = ["South Korea", "Japan", "China", "Taiwan", "Philippines", "Vietnam", "Lao People's Democratic Republic", "Thailland", "Cambodia", "Hong Kong", "Malaysia", "Indonesia", "Papua New Guinea", "Mongolia"];
        var AmericaArr = ["Canada", "United States", "Mexico", "Guatemala", "Belize", "Cuba", "Bahamas","Dominican Republic", "Haiti", "Jamaica", "Puerto Rico", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Colombia", "Venezuela","Guyana", "Ecuador", "Peru", "Brazil", "Suriname", "French Guiana", "Bolivia", "Paraguay", "Chile", "Argentina", "Uruguay"];
        var EuropeArr = ["Norway", "Sweden", "Finland", "Estonia", "Latvia", "Lithuania", "Belarus", "Russia", "Poland","Ukraine", "Moldova", "Romania", "Bulgaria", "Turkey", "Greece", "Albania", "Bosnia and Herzegovina", "Serbia", "Montenegro","Kosovo", "North Macedonia", "Italy", "France", "Spain", "Portugal", "United Kingdom", "Ireland", "Belgium", "Luxembourg", "Switzerland", "Austria", "Slovenia", "Croatia", "Hungary", "Czechia", "Germany", "Netherlands", "Denmark", "Slovakia"];
        //areaName에 따라 변경할 html 연결하면 됨.
        var locationHtml = "./index.html";
        if(asiaArr.indexOf(areaName) > -1){ //asia국가중에 있는지 먼저 찾고
            locationHtml = "./Asia.html"
        }else if(AmericaArr.indexOf(areaName) > -1){ //없으면 아메리카국가중에서 찾는다
            locationHtml = "./America.html"
        }else if(EuropeArr.indexOf(areaName) > -1){ //아시아 아메리카 둘다 없으면 유럽에서 찾는다.
            locationHtml = "./Europe.html"
        }else{ //모두 없으면 경고창
            alert("해당 국가는 준비 중입니다.");
            return;
        }
        location.href = locationHtml;
      }, 2000);
    })
    
    
    /* Create selected and hover states and set alternative fill color */
    var ss = polygonTemplate.states.create("active");
    ss.properties.fill = chart.colors.getIndex(2);
    
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(4);
    
    // Hide Antarctica
    polygonSeries.exclude = ["AQ"];
    
    // Small map
    chart.smallMap = new am4maps.SmallMap();
    // Re-position to top right (it defaults to bottom left)
    chart.smallMap.align = "right";
    chart.smallMap.valign = "top";
    chart.smallMap.series.push(polygonSeries);
    
    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();
    
    }); // end am4core.ready()