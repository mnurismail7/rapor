(function (angular) {
    'use strict'
    angular.module("Nilai_Ekskul", [])
    .controller("Nilai_EkskulController", function ($scope, $http) {
        $scope.DataNilai_Ekskul = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul"
        }).then(function (response) {
            $scope.DataNilai_Ekskul = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataNilai_Ekskul.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul?NISN=" + item.NISN,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataNilai_Ekskul.indexOf(item);
                $scope.DataNilai_Ekskul.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);