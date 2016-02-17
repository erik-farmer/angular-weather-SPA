// Routes
(function () {
    angular
        .module('weatherApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/forecast', {
                templateUrl: 'forecast/forecast.html',
                controller: 'forecastController',
                controllerAs: 'vm'
            })
            .when('/forecast/:days', {
                templateUrl: 'forecast/forecast.html',
                controller: 'forecastController',
                controllerAs: 'vm'
            });
    }
})();