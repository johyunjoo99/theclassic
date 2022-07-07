$( function() {

    //영화 선택
    $("#movie_select label").click(function(){
      $("#movie_select label").removeClass("on");
      $(this).addClass("on");
    });



    //날짜 선택
    $( "#calendar" ).datepicker({

      dateFormat: "yy / mm / dd",

      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

      showOtherMonths: true,
      selectOtherMonths: true,

      minDate: "d",
      maxDate: "+1w"
    });

    $("#calendar").blur(function(){
      $(this).css("background-color", "#d82f35");
      $(this).css("color", "#fff");
    });


    //시간 선택
    $("#time_input label").click(function(){
        $("#time_input label").removeClass("on")
        $(this).addClass("on");
    });


    //인원 수 선택
    $(".plus").click(function(){
      $("#number_select input").css("background-color", "#d82f35");
      $("#number_select input").css("color", "#fff");
      if($('.number').val() > 8){
        alert("인원은 최대 8명까지 가능합니다.");
        $('.number').val(8);
      } else{
        $(".number").val(parseInt($(".number").val()) + 1);
      }
    });

    $(".minus").click(function(){
      if($(".number").val() < 2){
        alert("인원은 최소 1명부터 가능합니다.");
        $(".number").val(1);
      } else{
        $(".number").val(parseInt($(".number").val()) - 1);
      }
    });


    // 초기화 버튼 click
    $("#button_zip input:last").click(function(){
      location.reload();
    });


    //seat_popup open/close
    $("#seat_select button").click(function(){
      $("#popup_seat").show();
    });

    $("#popup_seat .close").click(function(){
      $("#popup_seat").hide();
    });



    //좌석 선택
    $(".horizontal1 > div, .horizontal2 > div, .horizontal3 > div").click(function(){
      $(this).toggleClass("on");
    });

  } );