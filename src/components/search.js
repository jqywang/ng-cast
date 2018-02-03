angular.module('video-player')

  .component('search', {
    // TODO
    bindings: {
      makeSearch: '<',
      searchValue: '<'
    },
    templateUrl: "src/templates/search.html"
  });
