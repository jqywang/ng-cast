angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function(youTube) {
      this.videos;
      this.currentVideo;
      this.selectVideo = (video) => {
        this.currentVideo = video;
        //this.selected = exampleVideoData[index];
      };
      this.searchResults = (videos) => {
        console.log(videos);
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      this.makeSearch = (query, callback = this.searchResults) => {
        youTube
          .search(query, callback);
      };
      
      this.$onInit = (youTube) => {
        this.makeSearch('');
      };
    },

    templateUrl: "src/templates/app.html"
  });

