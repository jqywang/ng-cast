angular.module('video-player')
  .service('youTube', function($http) {
    // TODO
    this.search = (query, callback) => {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCil7lpVb-38lesrJb0Xt3H1B2YnTBBYhY',
          q: query,
          part: 'snippet',
          maxResults: 5,
          videoEmbeddable: true,
          type: 'video'
        }
      }).then((response) => { callback(response.data.items); });
    };
  });
