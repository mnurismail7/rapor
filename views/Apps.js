(function (angular) {
    'use strict'
    angular.module("Rapor",['MyController', 'ngAnimate', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('Home');
        $stateProvider
        .state("Home", {
            url: "/Home",
            templateUrl: "views/pages/Home.html",
            controller: "HomeController"
        })
        .state("Siswa", {
            url: "/Siswa",
            templateUrl: "views/pages/Siswa.html",
            controller: "SiswaController"
        })
        .state("Mapel", {
            url: "/Mapel",
            templateUrl: "views/pages/Mapel.html",
            controller: "MapelController"
        })
        .state("PnK", {
            url: "/PnK",
            templateUrl: "views/pages/PnK.html",
            controller: "PnKController"
        })
        .state("Ekskul", {
            url: "/Ekskul",
            templateUrl: "views/pages/Ekskul.html",
            controller: "EkskulController"
        })
        .state("Guru", {
            url: "/Guru",
            templateUrl: "views/pages/Guru.html",
            controller: "GuruController"
        })
        .state("Kelas", {
            url: "/Kelas",
            templateUrl: "views/pages/Kelas.html",
            controller: "KelasController"
        })
        .state("Tahun", {
            url: "/Tahun",
            templateUrl: "views/pages/Tahun.html",
            controller: "TahunController"
        })
        ;
    })
})(window.angular);