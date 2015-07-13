// Directives
weatherApp.directive('weatherReport', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: "=", // for passing an object
      convertToStandard: '&', // for passing a function
      convertToDate: '&',
      dateFormat: '@' // for one way data binding
    }
  };
});