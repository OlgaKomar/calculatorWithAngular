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