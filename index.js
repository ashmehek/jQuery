

$("h1").addClass("big-title margin-50");

// $("button").text("Dont Click Me");
// $("button").html("<em>Dont Click Me</em>");

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");
//
// $("button").click(function(){
//   $("h1").css("color", "red");
// })
// $(document).keypress(function(event){
//   console.log($("h1").text(event.key));
// })
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
})
// $("button").on("click", function(){
//   $("h1").slideDown();
// })
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
