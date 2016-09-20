// Routes
(function () {
    angular
        .module('weatherApp')
        .config(config);

    function config($stateProvider) {

        var homeState = {
            name: 'home',
            url: '/',
            controller: 'homeController',
            controllerAs: 'vm',
            templateUrl: 'home/home.html'
        };

        var forecastState = {
            name: 'forecast',
            url: '/forecast',
            controller: 'forecastController',
            controllerAs: 'vm',
            templateUrl: 'forecast/forecast.html'
        };

        var forecastDaysState = {
            name: 'forecastDays',
            url: '/forecast/{days}',
            controller: 'forecastController',
            controllerAs: 'vm',
            templateUrl: 'forecast/forecast.html'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(forecastState);
        $stateProvider.state(forecastDaysState);
    }
})();