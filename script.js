

$( document ).ready(function() {
    console.log( "ready!" );

 //adds new boxes to form

    $("#add").click(function() {
  $(".form").append('<div class="entry"><label for="name">Name</label> <input type="text" id="name" class="user_name"> <label for="email">Email</label> <input type="text" id="email" class="address"></div>')
});

//shows christmas cracker joke
   $(".huh").click(function() {
  $(".a").show();
});

//when send button is clicked
   $("#send").click(function() {
    // counts number of text boxes
    var numItem= $('.entry').length;

    //creates array of numbers 
    var sequence=Array.apply(null, {length: numItem}).map(Number.call, Number);

    //randomises array of numbers
    sequence.sort(function(a, b){return 0.5 - Math.random()});


    //loop to assign emails to names

    for (var i=0; i<numItem; i=i+1){
         
        var an_email=$('.address')[sequence[i]];

        var y=i+1;

        if (y==numItem) {
            y=0;
        }

        
        var a_name=$('.user_name')[sequence[y]];
        

        //parameters: service_id, template_id, template_parameters
        emailjs.send("yourhelpelf_gmail_com","secret_santa",{name: a_name.value, email: an_email.value});

    }




   });

});
