angular.module('video-player')
  

  .component('videoPlayer', {
    // TODO
    bindings: {
      data: '<'
    },
    controller: function() {
      this.url = "https://www.youtube.com/embed/1w8Z0UOXVaY";
    },
    templateUrl:"src/templates/videoPlayer.html"
  });
