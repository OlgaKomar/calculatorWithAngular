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
