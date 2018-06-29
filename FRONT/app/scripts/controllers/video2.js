// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name appfrontendApp.controller:VideoCtrl
//  * @description
//  * # VideoCtrl
//  * Controller of the appfrontendApp
//  */
// angular.module('appfrontendApp')
//   .controller('VideoCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//     var vm=this;
//     vm.video={
//       url:'views/video.html'
//     }
//
//
//     $scope.crearVideo=function(){
//       video.agregarVideo($scope.video)
//       .then(function(respuesta){
//         console.log(respuesta)
//       },
//       function(error){
//         console.log(error)
//
//
//       });
//       console.log($scope.video)
//
//
//     }
//
//
//     vm.controller('Controller',function($scope){
//
//     }
//
//
//     vm.directive('youtube',function($window){
//       return{
//         restrict:'E',
//         scope:{
//           width:"@",
//           height:"@",
//           videoId:"@"
//         },
//         template:"<div></div>",
//         link: function(scope,element){
//           var tag=document.createElement('script');
//           tag.src="https://www.youtube.com/iframe_api"
//           var firstsScriptTag= document.getElementsByTagName('script')[0];
//           firstsScriptTag.parentNode.insertBefore(tag,firstsScriptTag);
//
//           var player;
//
//           $window.onYoutubeIframeAPIReady=function(){
//             player=new YT.Player(element.children()[0],{
//               playerVars : {
//                 autoplay:0,
//                 html5: 1,
//                 theme:'light',
//                 color: 'white'
//               },
//
//               height: scope.height,
//               width: scope.width,
//               videoId: scope.videoId
//
//             });
//           }
//         }
//       }
//     });
//   });
