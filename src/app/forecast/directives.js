// Directives
(function () {
    angular
        .module('weatherApp')
        .directive('weatherReport', directiveFunction);

    function directiveFunction () {
        return {
          restrict: 'E',
          templateUrl: './forecast/weatherReport.html',
          replace: true,
          scope: {
            weatherDay: "=", // for passing an object
            convertToStandard: '&', // for passing a function
            convertToDate: '&',
            dateFormat: '@' // for one way data binding
          }
        };
    }
})();
