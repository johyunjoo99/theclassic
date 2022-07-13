$( function() {

    //영화 선택
    $("#movie_select label").click(function(){
      $("#movie_select label").removeClass("on");
      $(this).addClass("on");
    });



    //날짜 선택
    $( "#calendar" ).datepicker({
      altField: "#calendar",
      dateFormat: "yy / mm / dd",

      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

      showOtherMonths: true,
      selectOtherMonths: true,

      minDate: "d",
      maxDate: "+1w",

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
        alert("Up to 8 people are allowed.");
        $('.number').val(8);
      } else{
        $(".number").val(parseInt($(".number").val()) + 1);
      }
    });

    $(".minus").click(function(){
      if($(".number").val() < 2){
        alert("The number of people can be at least one person is allowed.");
        $(".number").val(1);
      } else{
        $(".number").val(parseInt($(".number").val()) - 1);
      }
    });



    //seat_popup open/close
    $("#seat_select button").click(function(){
      $("#popup_seat").show();
      $(".seat").removeClass("select");
      $(".horizontal input").prop("checked", false); 
    });

    $("#popup_seat .close").click(function(){
      $("#popup_seat").hide();
      $(".seat").removeClass("select");
      $(".horizontal input").prop("checked", false); 
    });

  
    //버튼 활성화
    // var selectMovie = $('input[name="movie"]').is(":checked");
    // var selectdate = $("#calendar").val() == "";
    // var selectTime = $('input[name="time"]').is(":checked");

    // if(selectMovie == false && selectdate == true && selectTime == false){
    //   $("#seat_select button").attr("disabled", "disabled");
    // } else{
    //   $("#seat_select button").removeAttr("disabled");
    // }




    //좌석 선택

    $(".horizontal input").change(function(){

      $(this).parent().toggleClass("select");

      var seatNumber = $(".number").val();
      var selectSeat = $(".horizontal input:checked").length;

      if(seatNumber < selectSeat){
        alert("Please select only the number of seats you have selected.");
       
        $(this).parent().toggleClass("select");
        $(this).prop("checked", false); 
      }

    });

    $("#ok").click(function(){
      var reservation_confirm = confirm("Would you like to make a reservation for the seat you chose. \n\n" + 
                                        "※ You can't change your seat if you press OK. ※");

      if(reservation_confirm == true){

        alert("Your seat selection is complete.")
        $("#popup_seat").hide();
        $(".horizontal input:checked").prop("disabled", true);
        $(".horizontal input:checked").parent().css("background-color", "#fff")

      } else if(reservation_confirm == false){

        $("#popup_seat").show();

      }
    });

    $("#reset").click(function(){
      $(".horizontal input").parent().removeClass("select");
      $(".horizontal input").prop("checked", false); 
    });



    //  personal_info
    $("#complete").click(function(){
      $("#personal_info").show();
    });

    $("#personal_info .close").click(function(){
      $("#personal_info").hide();
    });

    $("#clear").click(function(){

      alert("Your movie reservation is complete.");
      $("#personal_info").hide();

    });


    //영화 차트 fade
    $("#scheduled_work").hide();

    $(".movieMenu:first").click(function(){
      $("#order_reservation").fadeIn();
      $("#scheduled_work").hide();
      $(".movieMenu").removeClass("on");
      $(this).addClass("on");
    });

    $(".movieMenu:last").click(function(){
      $("#scheduled_work").fadeIn();
      $("#order_reservation").hide();
      $(".movieMenu").removeClass("on");
      $(this).addClass("on");
    });


    // 상영예정작 슬라이드
    var fullWith = $("#work_list").width();
    var slideWith = fullWith / 5;

    $("#scheduled_work .prev").click(function(){

      $(".workImg:last").prependTo("#work_list");
      $("#work_list").css({marginLeft: -slideWith});
      $("#work_list").stop().animate({marginLeft: 0});

      $(".workImg").removeClass("scale");
      $(".workImg:nth-of-type(2)").addClass("scale");
    });

    $("#scheduled_work .next").click(function(){

        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(3)").addClass("scale");

      $("#work_list").stop().animate({marginLeft: -slideWith}, function(){
        $(".workImg:first").appendTo("#work_list");
        $("#work_list").css({marginLeft: 0});
      });

    });


  } );