angular.module('video-player')
  
  .component('app', {
    // TODO
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.selectVideo = (video) => {
        this.currentVideo = video;
        //this.selected = exampleVideoData[index];
      };
      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      this.makeSearch = (query) => {
        youTube
          .search(query)
          .then((response) => {
            console.log(response);
            this.searchResults(response.data.items);
          });
          
      };
      
      // this.makeSearch('cat');
    },
    templateUrl: "src/templates/app.html"
  });

