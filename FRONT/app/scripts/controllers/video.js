'use strict';

/**
 * @ngdoc function
 * @name appfrontendApp.controller:jtt_youtube
 * @description
 * # jtt_youtube
 * Controller of the appfrontendApp
 */


 angular.module('appfrontendApp')
   .controller('VideoCtrl', function () {
     this.awesomeThings = [
       'HTML5 Boilerplate',
       'AngularJS',
       'Karma'
     ];
     var vm=this;
     vm.video={
       url:'views/video.html'
     }

});

angular.module("jtt_youtube",["appfrontendApp"])
 .controller('appController', function($scope, youtubeFactory){
    youtubeFactory.getVideoById({
      videoId: "xcJtL7QggTI",
      key: "AIzaSyCFeXgy6Boj4bUHrBFVDsbsCUWg8Pzb2Yc",
  }).then(function (respuesta) {
          console.log(respuesta)
  }).catch(function (error) {
          console.log(error)
  });
});
