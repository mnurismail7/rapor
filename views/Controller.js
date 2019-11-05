(function (anngular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })
        .controller("SiswaController", function ($scope, $http) {
            $scope.DataSiswa = [];
            $scope.Input = {};
            $scope.JK =[{'jk': 'Laki-laki'}, {'jk': 'Perempuan'}];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
            }).then(function (response) {
                $scope.DataSiswa = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Siswa",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataSiswa = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("MapelController", function ($scope, $http) {
            $scope.DataMapel = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
            }).then(function (response) {
                $scope.DataMapel = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("GuruController", function ($scope, $http) {
            $scope.DataGuru = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Guru"
            }).then(function (response) {
                $scope.DataGuru = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("EkskulController", function ($scope, $http) {
            $scope.DataEkskul = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
            }).then(function (response) {
                $scope.DataEkskul = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("PnKController", function ($scope, $http) {
        })
        .controller("KelasController", function ($scope, $http) {
        })
        .controller("TahunController", function ($scope, $http) {
        });
})(window.angular);