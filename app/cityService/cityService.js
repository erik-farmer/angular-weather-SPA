// Services
(function () {
    angular
        .module('weatherApp')
        .service('cityService', serviceFunction);

    function serviceFunction() {
        var vm = this;
        vm.city = 'San Jose, CA';
    }

})();
