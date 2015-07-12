// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes
weatherApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  });
});

// Services
weatherApp.service('cityService', function() {
  this.city = 'San Jose, CA';
});

// Controllers
weatherApp.controller('homeController', function($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })
});

weatherApp.controller('forecastController', function($scope, cityService) {
  $scope.city = cityService.city;
});