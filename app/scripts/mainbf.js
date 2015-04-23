(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
    'use strict';

    module.exports = function () {
        return {
            restrict: 'E',
            templateUrl: './scripts/calculator/directives/calculator-display.html'
        };
    };

},{}],3:[function(require,module,exports){
    'use strict';

    module.exports = function () {
        return {
            restrict: 'E',
            templateUrl: './scripts/calculator/directives/calculator-keys.html'
        };
    };

},{}],4:[function(require,module,exports){
    'use strict';

    module.exports = function () {
        return {
            restrict: 'E',
            templateUrl: './scripts/calculator/directives/calculator-widget.html',
            controller: 'KeysCtrl'
        };
    };

},{}],5:[function(require,module,exports){
    'use strict';

    module.exports = function () {
      return {
        transformTextIntoArr: function (text, callback){
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
          callback(arrValues);
          return this;
        },
        analyzeOperator: function(arrValues, callback){
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
          callback(arrValues);
          return this;
        }
      };
    }; 
},{}],6:[function(require,module,exports){
'use strict';
//require('./vendor/angular');

angular.module('calculator', [])
// features for calculator
    .factory('arrayAnalizer', require('./calculator/services/arrayAnalizer'))
    .controller('KeysCtrl', require('./calculator/controllers/keysCtrl'))
    .directive('calculatorWidget', require('./calculator/directives/calculatorWidget'))
    .directive('calculatorDisplay', require('./calculator/directives/calculatorDisplay'))
    .directive('calculatorKeys', require('./calculator/directives/calculatorKeys'))
// features for navigation
    .controller('NavBarCtrl', require('./navigation/controllers/NavBarCtrl'))   
    .directive('navBar', require('./navigation/directives/navBar'));
},{"./calculator/controllers/keysCtrl":1,"./calculator/directives/calculatorDisplay":2,"./calculator/directives/calculatorKeys":3,"./calculator/directives/calculatorWidget":4,"./calculator/services/arrayAnalizer":5,"./navigation/controllers/NavBarCtrl":7,"./navigation/directives/navBar":8}],7:[function(require,module,exports){
    'use strict';

    module.exports = function($scope){
        $scope.brandName = "Calculator";
    };

},{}],8:[function(require,module,exports){
    'use strict';

    module.exports = function () {
        return {
            restrict: 'E',
            templateUrl: './scripts/navigation/directives/nav-bar.html',
            controller: 'NavBarCtrl'
        };
    };

},{}]},{},[6])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFwcC9zY3JpcHRzL2NhbGN1bGF0b3IvY29udHJvbGxlcnMva2V5c0N0cmwuanMiLCJhcHAvc2NyaXB0cy9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvckRpc3BsYXkuanMiLCJhcHAvc2NyaXB0cy9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvcktleXMuanMiLCJhcHAvc2NyaXB0cy9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvcldpZGdldC5qcyIsImFwcC9zY3JpcHRzL2NhbGN1bGF0b3Ivc2VydmljZXMvYXJyYXlBbmFsaXplci5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9uYXZpZ2F0aW9uL2NvbnRyb2xsZXJzL05hdkJhckN0cmwuanMiLCJhcHAvc2NyaXB0cy9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc2NvcGUsIGFycmF5QW5hbGl6ZXIpe1xyXG4gICAgICAgICRzY29wZS5udW1iZXJBcnIgPSBbNyw4LDksNCw1LDYsMSwyLDMsMF07XHJcbiAgICAgICAgJHNjb3BlLm9wZXJhdG9yQXJyID0gW1wiK1wiLFwiLVwiLFwiL1wiLFwieFwiXTtcclxuICAgICAgICAkc2NvcGUuaW5wdXRUZXh0ID0gXCJcIjtcclxuICAgICAgICAkc2NvcGUuYXJyVmFsdWVzID0gW107XHJcbiAgICAgICAgJHNjb3BlLmNsaWNrTnVtYmVyID0gZnVuY3Rpb24oYnV0dG9uVmFsKXtcclxuICAgICAgICAgICAgJHNjb3BlLmlucHV0VGV4dCArPSBidXR0b25WYWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuY2xlclNjcmVlbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICRzY29wZS5pbnB1dFRleHQgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS50cmFuc2Zvcm1UZXh0SW50b051bWJlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGFycmF5QW5hbGl6ZXIudHJhbnNmb3JtVGV4dEludG9BcnIoJHNjb3BlLmlucHV0VGV4dCwgZnVuY3Rpb24oYXJyVmFsdWVzKXtcclxuICAgICAgICAgICAgICAgICRzY29wZS5hcnJWYWx1ZXMgPSBhcnJWYWx1ZXM7XHJcbiAgICAgICAgICAgIH0pLmFuYWx5emVPcGVyYXRvcigkc2NvcGUuYXJyVmFsdWVzLCBmdW5jdGlvbihhcnJWYWx1ZXMpe1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFyclZhbHVlcyA9IGFyclZhbHVlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuZXhlY3V0ZUNhbGMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gMCxcclxuICAgICAgICAgICAgICAgIGFyclZhbHVlcyA9ICRzY29wZS5hcnJWYWx1ZXM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyclZhbHVlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgYXJyVmFsdWVzW2ldID09PSBcIm51bWJlclwiKSB8fCBpc05hTihhcnJWYWx1ZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gPSBcIk5hTlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHN1bSArPSBhcnJWYWx1ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJyVmFsdWVzID0gW107XHJcbiAgICAgICAgICAgIHJldHVybiAoISh0eXBlb2Ygc3VtID09PSBcIm51bWJlclwiKSB8fCBpc05hTihzdW0pKSA/IFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlucHV0VGV4dCA9IFwiTmFOXCIgOiAkc2NvcGUuaW5wdXRUZXh0ID0gc3VtO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHNjb3BlLmNhbGN1bGF0b3JFdmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudHJhbnNmb3JtVGV4dEludG9OdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5leGVjdXRlQ2FsYygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4iLCIgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi9zY3JpcHRzL2NhbGN1bGF0b3IvZGlyZWN0aXZlcy9jYWxjdWxhdG9yLWRpc3BsYXkuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuIiwiICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vc2NyaXB0cy9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvci1rZXlzLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiIsIiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3NjcmlwdHMvY2FsY3VsYXRvci9kaXJlY3RpdmVzL2NhbGN1bGF0b3Itd2lkZ2V0Lmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnS2V5c0N0cmwnXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiIsIiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHJhbnNmb3JtVGV4dEludG9BcnI6IGZ1bmN0aW9uICh0ZXh0LCBjYWxsYmFjayl7XHJcbiAgICAgICAgICB2YXIgdmFsID0gdGV4dCxcclxuICAgICAgICAgICAgICBhcnJWYWx1ZXMgPSBbXTtcclxuICAgICAgICAgIHdoaWxlKHZhbCl7XHJcbiAgICAgICAgICAgIGFyclZhbHVlcy5wdXNoKHBhcnNlRmxvYXQodmFsKSk7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZShhcnJWYWx1ZXNbYXJyVmFsdWVzLmxlbmd0aC0xXS50b1N0cmluZygpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmKHZhbC5sZW5ndGggPT0gMSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICBhcnJWYWx1ZXMucHVzaCh2YWxbMF0pO1xyXG4gICAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soYXJyVmFsdWVzKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5hbHl6ZU9wZXJhdG9yOiBmdW5jdGlvbihhcnJWYWx1ZXMsIGNhbGxiYWNrKXtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyVmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJyVmFsdWVzW2ldID09IFwieFwiIHx8IGFyclZhbHVlc1tpXSA9PSBcIipcIiB8fCBhcnJWYWx1ZXNbaV0gPT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAoYXJyVmFsdWVzW2ldID09IFwiL1wiKSA/IGFyclZhbHVlc1tpLTFdIC89IGFyclZhbHVlc1tpKzFdIDogYXJyVmFsdWVzW2ktMV0gKj0gYXJyVmFsdWVzW2krMV07XHJcbiAgICAgICAgICAgICAgYXJyVmFsdWVzLnNwbGljZShpLCAyKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFyclZhbHVlc1tpXSA9PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgIGFyclZhbHVlc1tpKzFdID0gcGFyc2VGbG9hdChcIi1cIiArIGFyclZhbHVlc1tpKzFdKTtcclxuICAgICAgICAgICAgICBhcnJWYWx1ZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcnJWYWx1ZXNbaV0gPT0gXCIrXCIgfHwgYXJyVmFsdWVzW2ldID09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgICAgYXJyVmFsdWVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJWYWx1ZXMpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNhbGxiYWNrKGFyclZhbHVlcyk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9OyAiLCIndXNlIHN0cmljdCc7XHJcbi8vcmVxdWlyZSgnLi92ZW5kb3IvYW5ndWxhcicpO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2NhbGN1bGF0b3InLCBbXSlcclxuLy8gZmVhdHVyZXMgZm9yIGNhbGN1bGF0b3JcclxuICAgIC5mYWN0b3J5KCdhcnJheUFuYWxpemVyJywgcmVxdWlyZSgnLi9jYWxjdWxhdG9yL3NlcnZpY2VzL2FycmF5QW5hbGl6ZXInKSlcclxuICAgIC5jb250cm9sbGVyKCdLZXlzQ3RybCcsIHJlcXVpcmUoJy4vY2FsY3VsYXRvci9jb250cm9sbGVycy9rZXlzQ3RybCcpKVxyXG4gICAgLmRpcmVjdGl2ZSgnY2FsY3VsYXRvcldpZGdldCcsIHJlcXVpcmUoJy4vY2FsY3VsYXRvci9kaXJlY3RpdmVzL2NhbGN1bGF0b3JXaWRnZXQnKSlcclxuICAgIC5kaXJlY3RpdmUoJ2NhbGN1bGF0b3JEaXNwbGF5JywgcmVxdWlyZSgnLi9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvckRpc3BsYXknKSlcclxuICAgIC5kaXJlY3RpdmUoJ2NhbGN1bGF0b3JLZXlzJywgcmVxdWlyZSgnLi9jYWxjdWxhdG9yL2RpcmVjdGl2ZXMvY2FsY3VsYXRvcktleXMnKSlcclxuLy8gZmVhdHVyZXMgZm9yIG5hdmlnYXRpb25cclxuICAgIC5jb250cm9sbGVyKCdOYXZCYXJDdHJsJywgcmVxdWlyZSgnLi9uYXZpZ2F0aW9uL2NvbnRyb2xsZXJzL05hdkJhckN0cmwnKSkgICBcclxuICAgIC5kaXJlY3RpdmUoJ25hdkJhcicsIHJlcXVpcmUoJy4vbmF2aWdhdGlvbi9kaXJlY3RpdmVzL25hdkJhcicpKTsiLCIgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgICAkc2NvcGUuYnJhbmROYW1lID0gXCJDYWxjdWxhdG9yXCI7XHJcbiAgICB9O1xyXG4iLCIgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi9zY3JpcHRzL25hdmlnYXRpb24vZGlyZWN0aXZlcy9uYXYtYmFyLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTmF2QmFyQ3RybCdcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuIl19
