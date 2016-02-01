// Services
(function () {
    angular
        .module('weatherApp')
        .service('cityService', serviceFunction);

    function serviceFunction() {
        this.city = 'San Jose, CA';
    }
})();
