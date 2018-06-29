'use strict';

/**
 * @ngdoc function
 * @name servicecourseApp.controller:MultimediaCtrl
 * @description
 * # MultimediaCtrl
 * Controller of the servicecourseApp
 */
angular.module('servicecourseApp')
  .controller('MultimediaCtrl', function ($scope,$location,video,idco,idca) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var vm = this;
    vm.plantilla = {
    	url: 'views/plantilla.html'
    };

    $scope.video={}
    $scope.video2={}



    $scope.visualizarVideos = function(){
      // $location.path( "/formulario" );
      video.mostrarVideos(idco.text,idca.text)
      .then(function(respuesta) {
        console.log(respuesta)
        $scope.video2=respuesta.data
  		},
  		function(error) { // optional
        console.log(error)
  		});
      //console.log($scope.video2)
      console.log($scope.video2)
    }


    /*$scope.crearVideo=function(){
      video.agregarVideo($scope.video,idco.text,idca.text)
      .then(function(respuesta) {
        console.log(respuesta)
  		},
  		function(error) { // optional
        console.log(error)
  		});
      console.log($scope.video)
    }*/


    $scope.crearVideo=function(){
      video.agregarVideo($scope.video,idco.text,idca.text)
      .then(function(respuesta) {
        console.log(respuesta)
  		},
  		function(error) { // optional
        console.log(error)
  		});
      console.log($scope.video)

      video.mostrarVideos(idco.text,idca.text)
      .then(function(respuesta) {
        console.log(respuesta)
        $scope.video2=respuesta.data
  		},
  		function(error) { // optional
        console.log(error)
  		});
      console.log($scope.video2)
    }
});
