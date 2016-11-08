// Routes
(function () {

    angular
        .module('weatherApp')
        .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeController',
                controllerAs: 'vm',
                templateUrl: 'app/home/home.html'
            })
            .state('forecast', {
                url: '/forecast',
                controller: 'forecastController',
                controllerAs: 'vm',
                templateUrl: 'app/forecast/forecast.html'
            })
            .state('forecastDays', {
                name: 'forecastDays',
                url: '/forecast/{days}',
                controller: 'forecastController',
                controllerAs: 'vm',
                templateUrl: 'app/forecast/forecast.html'
            });

    }

})();