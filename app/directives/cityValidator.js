// Validator directive to ensure only cities in `{City}, {State}` format are accepted.
(function () {
    angular
        .module('weatherApp')
        .directive('cityValidator', directiveFunction);

    function directiveFunction () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.potato = function(modelValue) {
                    console.log(modelValue);

                    var re1='((?:[a-z][a-z]+))';  // Word 1
                    var re2='(,)';    // Any Single Character 1
                    var re3='( )';    // White Space 1
                    var re4='((?:(?:AL)|(?:AK)|(?:AS)|(?:AZ)|(?:AR)|(?:CA)|(?:CO)|(?:CT)|(?:DE)|(?:DC)|(?:FM)|(?:FL)|(?:GA)|(?:GU)|(?:HI)|(?:ID)|(?:IL)|(?:IN)|(?:IA)|(?:KS)|(?:KY)|(?:LA)|(?:ME)|(?:MH)|(?:MD)|(?:MA)|(?:MI)|(?:MN)|(?:MS)|(?:MO)|(?:MT)|(?:NE)|(?:NV)|(?:NH)|(?:NJ)|(?:NM)|(?:NY)|(?:NC)|(?:ND)|(?:MP)|(?:OH)|(?:OK)|(?:OR)|(?:PW)|(?:PA)|(?:PR)|(?:RI)|(?:SC)|(?:SD)|(?:TN)|(?:TX)|(?:UT)|(?:VT)|(?:VI)|(?:VA)|(?:WA)|(?:WV)|(?:WI)|(?:WY)))(?![a-z])';    // US State 1

                    var p = new RegExp(re1+re2+re3+re4,["i"]);
                    if (p.exec(modelValue)) {
                        console.log('We did it');
                        return true;
                    }
                    else {
                        console.log('BOOOO');
                        return false;
                    }
                };
            }
        };
    }

})();