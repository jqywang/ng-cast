angular.module('video-player')
  .component('videoListEntry', {

    // TODO
    bindings: {
      item: "<",
      onClick:"<"
    },
    controller: function() {
    },
    templateUrl: "src/templates/videoListEntry.html"
  });
