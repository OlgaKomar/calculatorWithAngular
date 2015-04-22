'use strict';
require('./vendor/angular');

angular.module('calculator', [])
    .directive('calculatorDisplay', require('./directives/calculatorDisplay'))
    .factory('arrayAnalizer', require('./services/arrayAnalizer'))
    .controller('KeysCtrl', require('./controllers/keysCtrl'))
    .directive('calculatorKeys', require('./directives/calculatorKeys'))    
    .directive('calculatorWidget', require('./directives/calculatorWidget'));