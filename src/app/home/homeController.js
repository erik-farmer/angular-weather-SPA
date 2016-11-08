// Controllers
(function () {
  angular
      .module('weatherApp')
      .controller('homeController', controllerFunction);

    controllerFunction.$inject = ['cityService'];

    function controllerFunction (cityService) {
          var vm = this;
          vm.cityService = cityService;
    }

})();
