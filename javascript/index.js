$( function() {

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

  } );