angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function() {
      this.data = window.exampleVideoData;
      this.selected = exampleVideoData[0];
      this.selectVid = (video) => {
        this.selected = video;
        // this.selected = exampleVideoData[index];
      };
    },
    templateUrl: "src/templates/app.html"
  });
