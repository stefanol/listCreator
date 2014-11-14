
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();

    // A Green Box for the Peeps
    var box = $('.box');
    
    // Handle device change
    var orientationChange = function(event) {
      var x = Math.floor(event.beta);
      var y = Math.floor(event.gamma);
      socket.emit('move', [x,y]);

    };
    
    // Listen to device orientation event on the window
    window.addEventListener('deviceorientation', orientationChange);

    // Recieve Update Event From The Server
    socket.on('update', function(coord){
      var str = 'translate3d(' + coord[0] + 'px, ' + coord[1] + 'px, 0)';
      box.css({ transform: str, webkitTransform: str });
    });

});