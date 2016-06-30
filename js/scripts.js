//business logic
function Movie(title, time, age) {
  
}

//user interface logic
$(function() {
  $("form#movie-form").submit(function() {
    event.preventDefault();
    var title = parseInt($("#title").val());
    var time = parseInt("input#time").val();
    var age = parseInt("input#age").val();

  });
});
