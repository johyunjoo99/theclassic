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
    if($("input:radio[name='movie']").is(":checked") == false &&
       ($("#calendar").val() == "") == true &&
       $("input:radio[name='time']").is(":checked") == false){

        $("#seat_select button").attr("disabled", "disabled");
       } else{
        
        $("#seat_select button").removeAttr("disabled");

       }




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
  } );