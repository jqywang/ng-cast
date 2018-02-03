angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.searchValue = 'type here';
      this.selectVideo = (video) => {
        this.currentVideo = video;
        // this.selected = exampleVideoData[index];
      };
      this.searchResults = (videos) => {
        this.videos = videos;
      };
      this.makeSearch = () => {
        youTube
          .getVideos(this.searchValue)
          .then((response) => {
            console.log(response);
          //this.searchResults(response.items);
          })
          .catch(console.log('bad request'));
      };
    },
    templateUrl: "src/templates/app.html"
  });

