    'use strict';

    module.exports = function($scope, arrayAnalizer){
        $scope.numberArr = [7,8,9,4,5,6,1,2,3,0];
        $scope.operatorArr = ["+","-","/","x"];
        $scope.inputText = "";
        $scope.arrValues = [];
        $scope.clickNumber = function(buttonVal){
            $scope.inputText += buttonVal;
        };
        $scope.clerScreen = function(){
            $scope.inputText = "";
        };

        $scope.transformTextIntoNumbers = function () {
            arrayAnalizer.transformTextIntoArr($scope.inputText, function(arrValues){
                $scope.arrValues = arrValues;
            }).analyzeOperator($scope.arrValues, function(arrValues){
                $scope.arrValues = arrValues;
            });
        };
        $scope.executeCalc = function(){
            var sum = 0,
                arrValues = $scope.arrValues;

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
        };
        $scope.calculatorEval = function () {
            $scope.transformTextIntoNumbers();
            $scope.executeCalc();
        };
    };
