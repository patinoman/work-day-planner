$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  //saveBtn click listener
  $(".saveBtn").on("click", function () {
    //This gets relative values
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //This sets items into localStorage
    localStorage.setItem(time, text);
  });
  //This loads data from localStorage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
    //Current number of hours.
    var currentHour = moment().hours();

    // loop
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      if (blockHour < currentHour) {
        $(this).addClass(".past");
      } else if (blockHour === currentHour) {
        $(this).removeClass(".past");
        $(this).addClass(".present");
      } else {
        $(this).removeClass(".present");
        $(this).removeClass(".past");
        $(this).addClass(".future");
      }
    });
  }
  hourTracker();
});
