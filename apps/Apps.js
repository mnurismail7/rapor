(function (angular) {
    'use strict'
    angular.module("MyApp",['MyController', 'ngAnimate', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('Main');
        $stateProvider
        .state("Home", {
            url: "/Home",
            templateUrl: "apps/views/Home.html",
            controller: "HomeController"
        });
    })
})(window.angular);