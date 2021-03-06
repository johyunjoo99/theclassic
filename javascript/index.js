$( function() {

  //menuIcon click
  $(".menu").click(function(){
    $(".bigNav").css("transform", "translate(0)");
  })

  $(".bigNav .close").click(function(){
    $(".bigNav").css("transform", "translate(-100%)");
  })



  //top icon click
  $(document).scroll(function(){

    var headerHeight = $("header").height();

    if($(this).scrollTop() <= headerHeight){

      $("img[alt='top']").css("display", "none");

    }else{

      $("img[alt='top']").css("display", "block");

    }
  })

  $("img[alt='top']").click(function(){

    $("html, body").animate({scrollTop: 0}, 400);

  })



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
  function slideResize() {
    if (window.matchMedia(" (min-width: 0px) and (max-width: 649px)").matches) {

      $(".workImg").removeClass("scale");
      $(".workImg:first").addClass("scale");

      var fullWith = $("#work_list").width();
      var slideWith = fullWith / 5.4;
    
      $("#scheduled_work .prev").click(function () {
    
        $(".workImg:last").prependTo("#work_list");
        $("#work_list").css({ marginLeft: -slideWith });
        $("#work_list").stop().animate({ marginLeft: 0 });
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(1)").addClass("scale");
      });
    
      $("#scheduled_work .next").click(function () {
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(2)").addClass("scale");
    
        $("#work_list").stop().animate({ marginLeft: -slideWith }, function () {
          $(".workImg:first").appendTo("#work_list");
          $("#work_list").css({ marginLeft: 0 });
        });
    
      });
    } else if (window.matchMedia("(min-width: 650px) and (max-width: 999px)").matches) {

      $(".workImg").removeClass("scale");
      $(".workImg:nth-of-type(2)").addClass("scale");

      var fullWith = $("#work_list").width();
      var slideWith = fullWith / 5;
    
      $("#scheduled_work .prev").click(function () {
    
        $(".workImg:last").prependTo("#work_list");
        $("#work_list").css({ marginLeft: -slideWith });
        $("#work_list").stop().animate({ marginLeft: 0 });
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(2)").addClass("scale");
      });
    
      $("#scheduled_work .next").click(function () {
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(3)").addClass("scale");
    
        $("#work_list").stop().animate({ marginLeft: -slideWith }, function () {
          $(".workImg:first").appendTo("#work_list");
          $("#work_list").css({ marginLeft: 0 });
        });
    
      });

    } else {

      $(".workImg").removeClass("scale");
      $(".workImg:nth-of-type(2)").addClass("scale");

      var fullWith = $("#work_list").width();
      var slideWith = fullWith / 5;
    
      $("#scheduled_work .prev").click(function () {
    
        $(".workImg:last").prependTo("#work_list");
        $("#work_list").css({ marginLeft: -slideWith });
        $("#work_list").stop().animate({ marginLeft: 0 });
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(2)").addClass("scale");
      });
    
      $("#scheduled_work .next").click(function () {
    
        $(".workImg").removeClass("scale");
        $(".workImg:nth-of-type(3)").addClass("scale");
    
        $("#work_list").stop().animate({ marginLeft: -slideWith }, function () {
          $(".workImg:first").appendTo("#work_list");
          $("#work_list").css({ marginLeft: 0 });
        });
    
      });

    }

  }

  window.addEventListener("resize", slideResize, false);

  slideResize();
    









    //footer hover
    $("#percentage2 img").hover(function(){
      $(this).siblings("span").fadeIn();
    }, function(){
      $(this).siblings("span").fadeOut(100);
    })


    // 앵커 이동
    $(".bigNav li a").click(function(){

      var target = $(this).attr("href");
      var offset = $(target).offset().top;

      $("html, body").animate({scrollTop: offset - 50}, 400);
    });

    $("#address ul li a").click(function(){
      var target = $(this).attr("href");
      var offset = $(target).offset().top;

      $("html, body").animate({scrollTop: offset - 50}, 400);
    });


  } );