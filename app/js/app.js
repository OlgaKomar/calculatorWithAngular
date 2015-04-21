(function () {
    var app = angular.module('calculator', []);
    app.controller('KeysCtrl', function(){
        this.numberArr = [7,8,9,4,5,6,1,2,3,0];
        this.operatorArr = ["+","-","/","x"];
        this.clickNumber = function(){
            //alert(this.numberArr[1]);
        };
    });
    app.directive('calculatorDisplay', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-display.html'
        };
    });
    app.directive('calculatorKeys', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-keys.html',
            controller: function($scope){
                $scope.numberArr = [7,8,9,4,5,6,1,2,3,0];
                $scope.operatorArr = ["+","-","/","x"];
            }
        };
    });
    app.directive('calculatorWidget', function(){
        return {
            restrict: 'E',
            templateUrl: 'calculator-widget.html'
        };
    });
})();
