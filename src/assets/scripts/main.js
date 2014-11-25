
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();

    // Send A Message To The Server
    $('a').on('click', function(){
      var text = $('input').val();
      socket.emit('message', text);
    });



    $('div').on('click', function(){
      console.log('remove');
      var removeItem = $(text).val();
      socket.emit('message', text);
    });

    // Recieve Update Event From The Server
    socket.on('update', function(text){
      $('.messages').html(text);
    });

});