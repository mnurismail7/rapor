(function (angular) {
    'use strict'
    angular.module("Siswa", [])
    .controller("SiswaController", function ($scope, $http) {
        $scope.DataSiswa = [];
        $scope.Input = {};
        $scope.JK = [{ 'jk': 'L' }, { 'jk': 'P' }];
        $scope.Status = "Simpan";
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
        }).then(function (response) {
            $scope.DataSiswa = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Siswa",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataSiswa.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Siswa",
                    data: $scope.Input,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("UPDATE SUKSES");
                }, function (error) {
                    console.log(error.message);
                });
            }
        }
        $scope.Clear = function () {
            $scope.Status = "Simpan";
            $scope.Input = {};
        }
        $scope.GetDataItem = function (item) {
            $scope.Status = "Update"
            $scope.Input = item;
        }
        $scope.Hapus = function (item) {
            $http({
                method: "delete",
                url: "http://localhost/rapor/assets/CodeIgniter/Siswa?NISN=" + item.NISN,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataSiswa.indexOf(item);
                $scope.DataSiswa.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);