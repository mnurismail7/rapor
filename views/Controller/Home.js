(function (angular) {
    'use strict'
    angular.module("Home", [])
    .controller("HomeController", function ($scope, $http) {
        $scope.DataSiswa = [];
        $scope.DataGuru = [];
        $scope.DataMapel = [];
        $scope.DataPnK = [];
        $scope.DataEkskul = [];
        $scope.DataKelas = [];
        $scope.DataTahun = [];

        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
        }).then(function (response) {
            $scope.DataSiswa = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Guru"
        }).then(function (response) {
            $scope.DataGuru = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
        }).then(function (response) {
            $scope.DataMapel = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
        }).then(function (response) {
            $scope.DataPnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
        }).then(function (response) {
            $scope.DataEkskul = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Kelas"
        }).then(function (response) {
            $scope.DataKelas = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
        }).then(function (response) {
            $scope.DataTahun = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
    })
})(window.angular);