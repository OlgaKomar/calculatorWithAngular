    'use strict';

    module.exports = function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './scripts/pages/templates/calculator.html'
        })
        .when('/home', {
            templateUrl: './scripts/pages/templates/calculator.html'
        })
        .when('/about', {
            templateUrl: './scripts/pages/templates/about.html'
        })
        .when('/about/features', {
            templateUrl: './scripts/pages/templates/features.html'
        })
        .when('/article/:id', {
            templateUrl: './scripts/pages/templates/showArticle.html',
            controller: 'FeaturesCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    };