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

function loginCheck(){
    var con_test = confirm("로그인 후 이용이 가능합니다.");
    if(con_test == true){
        location.href="./login.html";
    }
    else{
        return;
    }
}