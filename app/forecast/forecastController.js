// Controllers
(function () {
  angular
      .module('weatherApp')
      .controller('forecastController', controllerFunction);

    controllerFunction.$inject = ['$resource', '$stateParams', 'cityService'];

    function controllerFunction ($resource, $stateParams, cityService) {
        var vm = this;
        vm.city = cityService.city;
        vm.days = $stateParams.days || '2';
        vm.convertToDate = convertToDate;
        vm.convertToFahrenheit = convertToFahrenheit;

        vm.weatherAPI = $resource(
            "http://api.openweathermap.org/data/2.5/forecast/daily",
            {callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }
        });

        vm.weatherResult = vm.weatherAPI.get({ q: vm.city, cnt: vm.days, APPID: 'yourAPIkey' });

        function convertToFahrenheit(degK) {
            return Math.round((1.8 * (degK - 273)) + 32);
        }

        function convertToDate(dt) {
            return new Date(dt * 1000);
        }
    }

})();
