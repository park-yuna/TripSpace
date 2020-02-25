let flag = 0;

$(document).ready(function(){
  evtFunc();
});

function evtFunc(){
    $("#under1").hover(function(){
      $('#Subs1').css('display','block');
      $('#Subs2').css('display','none');
      $("#under2, #under3, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
      $("#under2, #under3, #under5").css('color','#ffffff');
    });

    $('#under1').click(function(){
      $('#Subs1').css('display','block');
      $('#Subs2').css('display','none');
    });

    $("#under2").hover(function(){
      $('#Subs2').css('display','block');
      $('#Subs1').css('display','none');
      $("#under1, #under3, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
        $("#under1, #under3, #under5").css('color','#ffffff');
    });

    $('#under2').click(function(){
      $('#Subs2').css('display','block');
      $('#Subs1').css('display','none');
    });

    $("#under3").hover(function(){
      $('#Subs1').css('display','none');
      $('#Subs2').css('display','none');
      $("#under1, #under2, #under5").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
      $("#under1, #under2, #under5").css('color','#ffffff');
    });

    $("#under5").hover(function(){
      $('#Subs1').css('display','none');
      $('#Subs2').css('display','none');
      $("#under1, #under2, #under3").css("color","rgba(0, 0, 0, 0.1)");
    }, function(){
      $("#under1, #under2, #under3").css('color','#ffffff');
    });
}

$(".signin").click(function(){
  if(flag == 0){
    $(".move").addClass("moving");
    $(".move").removeClass("start");
    
    $(".form").addClass("movingForm");
    $(".form").removeClass("startForm");
    
    $(".hello").show();
    $(".welcome").hide();
    
    $(".move").css("background-position", "right");
    
    setTimeout(function(){
      $(".title").text("Sign-in in to Trip Space!");
      $(".light").text("Or use your email account");
      $(".name").hide();
      $(".p-button").text("SIGN IN");
      $(".b-button").text("SIGN UP");
      $(".forgot").show();
      $(".form").css("border-radius","10px 0px 0px 10px");
      $(".move").css("border-radius","0px 10px 10px 0px");
    }, 200);
    
    flag=1;
  }else{
    $(".move").removeClass("moving");
    $(".move").addClass("start");
    
    $(".form").removeClass("movingForm");
    $(".form").addClass("startForm");
    
    
    $(".hello").hide();
    $(".welcome").show();
    
    $(".move").css("background-position", "left");
    
    setTimeout(function(){
      $(".title").text("Create Account");
      $(".light").text("Or use your email for registration");
      $(".name").show();
      $(".p-button").text("SIGN UP");
      $(".b-button").text("SIGN IN");
      $(".forgot").hide();
      $(".form").css("border-radius","0px 10px 10px 0px");
      $(".move").css("border-radius","10px 0px 0px 10px");
    }, 200);
    
    flag=0;
  }
});