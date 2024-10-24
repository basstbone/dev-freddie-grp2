$(document).ready(function(){
  
  // return soccer ball to original position
  $('#reset').on('click', function(){
    
    $("#soccerBall").css( 'top', '0px').css('left', '0px');
   
  })
  // function that allows image to be dragged
  $("img").draggable( {
      stop: function() {
       
        
        if ( $("img").position().left > 100)
          {
            // they score
            $("body").append("<h2>GOLAZOOOOOOOOOOOOO! Thanks for playing, hit the reset button to start again!</h2> ") 
          }
        // alert( $("img").position().left ); 
        
 
      }
  });  
 

});