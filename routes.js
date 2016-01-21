// Routes
(function () {
  angular
      .module('weatherApp')
      .config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'pages/home.html',
          controller: 'homeController',
          controllerAs: 'vm'
        })
        .when('/forecast', {
          templateUrl: 'pages/forecast.html',
          controller: 'forecastController'
        })
        .when('/forecast/:days', {
          templateUrl: 'pages/forecast.html',
          controller: 'forecastController'
        });
      });
})();