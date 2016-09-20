// Controllers
(function () {
  angular
      .module('weatherApp')
      .controller('homeController', controllerFunction);

    controllerFunction.$inject = ['cityService'];

    function controllerFunction (cityService) {
          var vm = this;
          vm.cityService = cityService;
          // Curious as to why you need the whole object. Commented out in forecastController.
          // vm.city = cityService.city;
    }

})();
