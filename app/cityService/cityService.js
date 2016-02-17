// Services
(function () {
    angular
        .module('weatherApp')
        .service('cityService', serviceFunction);

    function serviceFunction() {
        vm = this;
        vm.city = 'San Jose, CA';
    }
})();
