angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      result: '<',
      searchValue: '<'
    },
    templateUrl: "src/templates/search.html"
  });
