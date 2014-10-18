$( "p" ).on( "mouseover", function() {
  $( this ).css( "color", "red" );
});


$(".other_results").hide();



$( ".show_button" ).click(function() {
  $( ".other_results" ).show( 700 );
});



// $( ".show_button" ).click(function() {
//   $( ".thebox" ).hide( 2000 );
// });

