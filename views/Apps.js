(function (angular) {
    'use strict'
    angular.module("Rapor", ['MyController', 'ngAnimate', 'ui.router'])
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
                .state("Guru", {
                    url: "/Guru",
                    templateUrl: "views/pages/Guru.html",
                    controller: "GuruController"
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
                .state("WaliKelas", {
                    url: "/WaliKelas",
                    templateUrl: "views/pages/WaliKelas.html",
                    controller: "WaliKelasController"
                })
                .state("KelasSiswa", {
                    url: "/KelasSiswa",
                    templateUrl: "views/pages/KelasSiswa.html",
                    controller: "KelasSiswaController"
                })
                .state("Input_Nilai", {
                    url: "/Input_Nilai",
                    templateUrl: "views/pages/Input_Nilai.html",
                    controller: "Input_NilaiController"
                })
                .state("Daftar_Nilai", {
                    url: "/Daftar_Nilai",
                    templateUrl: "views/pages/Daftar_Nilai.html",
                    controller: "Daftar_NilaiController"
                })
                // MAU DIHAPUS
                .state("Nilai_Mapel", {
                    url: "/Nilai_Mapel",
                    templateUrl: "views/pages/Nilai_Mapel.html",
                    controller: "Nilai_MapelController"
                })
                .state("Nilai_PnK", {
                    url: "/Nilai_PnK",
                    templateUrl: "views/pages/Nilai_PnK.html",
                    controller: "Nilai_PnKController"
                })
                .state("Nilai_Ekskul", {
                    url: "/Nilai_Ekskul",
                    templateUrl: "views/pages/Nilai_Ekskul.html",
                    controller: "Nilai_EkskulController"
                });

        })
        .controller("view", function($scope, $window){
            if($window.sessionStorage.getItem("username")==undefined || $window.sessionStorage.getItem("username")=="" || $window.sessionStorage.getItem("username")==null){
                window.location.href="login.html";
            }
            $scope.Logout= function(){
                sessionStorage.clear();
                window.location.href="index.html";
            }
        })
})(window.angular);