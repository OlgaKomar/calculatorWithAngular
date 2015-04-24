    'use strict';

    module.exports = function($scope, $routeParams){
        $scope.features = [{
            name: "User Agent",
            description: "An HTML user agent is any device that interprets HTML documents."
        },{
            name: "Client-side Scripting",
            description: "Client-side scripting generally refers to the category of computer programs on the web that are executed client-side i.e. by the user's web browser."
        },{
            name: "Document Tree",
            description: "The tree of elements encoded in the source document."
        }];
        $scope.id = $routeParams.id;
        $scope.articles = [{
            id: 1,
            title: "What is HTML?",
            shortText: "HTML stands for HyperText Markup Language. HTML is the main markup language for describing the structure of Web pages.",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id: 2,
            title: "What is Bootstrap?",
            shortText: "Bootstrap is a powerful front-end framework for faster and easier web development. It is a collection of HTML and CSS based design template.",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },{
            id: 3,
            title: "What is CSS?",
            shortText: "CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc.",
            mainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }];
    };