angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: "<",
      onClick: "<"
    },
    
    templateUrl: "src/templates/videoList.html"
    //template: '<div class="video-list" ng-repeat="video in $ctrl.data"> {{video}} </div>'
      
    
  });
