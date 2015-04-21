(function () {
    var app = angular.module('calculator', []);
    app.controller('KeysCtrl', function($scope){
        $scope.numberArr = [7,8,9,4,5,6,1,2,3,0];
        $scope.operatorArr = ["+","-","/","x"];
        $scope.inputText = "";
        $scope.clickNumber = function(buttonVal){
            $scope.inputText += buttonVal;
        };
        $scope.clerScreen = function(){
            $scope.inputText = "";
        };
        $scope.transformTextToNumberArr = function (text) {
            var val = text,
                arrValues = [];
            while(val){
              arrValues.push(parseFloat(val));
              val = val.slice(arrValues[arrValues.length-1].toString().length);
              if(val.length == 1) break;
              if (val) {
                arrValues.push(val[0]);
                val = val.slice(1);
              }
            }
            return arrValues;
        };
        $scope.analyzeOperatorsInArr = function (arrValues) {
            for (var i = 0; i < arrValues.length; i++) {

              if (arrValues[i] == "x" || arrValues[i] == "*" || arrValues[i] == "/") {
                (arrValues[i] == "/") ? arrValues[i-1] /= arrValues[i+1] : arrValues[i-1] *= arrValues[i+1];
                arrValues.splice(i, 2);
                i--;
                continue;
              }
              if (arrValues[i] == "-") {
                arrValues[i+1] = parseFloat("-" + arrValues[i+1]);
                arrValues.splice(i, 1);
              }
              if (arrValues[i] == "+" || arrValues[i] == ".") {
                arrValues.splice(i, 1);
              }

                console.log(arrValues);
            };
            return arrValues;
        };
        $scope.executeCalc = function(){
            var arrValues = $scope.transformTextToNumberArr($scope.inputText);
                arrValues = $scope.analyzeOperatorsInArr(arrValues),
                sum = 0;
            for (var i = 0, l = arrValues.length; i < l; i++) {
              if (!(typeof arrValues[i] === "number") || isNaN(arrValues[i])) {
                sum = "NaN";
                break;
              }
              sum += arrValues[i];
            }
            arrValues = [];
            return (!(typeof sum === "number") || isNaN(sum)) ? 
                $scope.inputText = "NaN" : $scope.inputText = sum;
        }
    })
    .directive('calculatorDisplay', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-display.html'
        };
    })
    .directive('calculatorKeys', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-keys.html'
        };
    })
    .directive('calculatorWidget', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-widget.html',
            controller: 'KeysCtrl'
        };
    });
})();
