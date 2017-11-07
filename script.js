

$( document ).ready(function() {
    console.log( "ready!" );

 

    $("#add").click(function() {
  $(".form").append('<div class="entry"><label for="name">Name</label><input type="text" id="name" name="user_name"><label for="email">Email</label><input type="text" id="email" name="address"></div>')
});


   $(".huh").click(function() {
  $(".a").show();
});

   $("#send").click(function() {
   	var numItem= $('.entry').length;
   	alert(numItem);
   	var N = numItem; 
var number=Array.apply(null, {length: N}).map(Number.call, Number);
alert(number);
var points = number;
points.sort(function(a, b){return 0.5 - Math.random()});
alert(points);
   });

});
