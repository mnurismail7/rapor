(function (angular) {
    'use strict'
    angular.module("Nilai_Mapel", [])
    .controller("Nilai_MapelController", function ($scope, $http) {
        $scope.DataNilai_Mapel = [];
        $scope.DataMapel = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $scope.SelectedSiswa = {};
        //Get Data Tabel Siswa
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
        }).then(function (response) {
            $scope.DataSiswa = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        //Get Tabel Mata Pelajaran
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
        }).then(function (response) {
            $scope.DataMapel = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // Get Tabel Nilai Mata Pelajaran
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel"
        }).then(function (response) {
            $scope.DataNilai_Mapel = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataNilai_Mapel.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel?NISN=" + item.NISN,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataNilai_Mapel.indexOf(item);
                $scope.DataNilai_Mapel.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);