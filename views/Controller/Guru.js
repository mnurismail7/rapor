(function (angular) {
    'use strict'
    angular.module("Guru", [])
    .controller("GuruController", function ($scope, $http) {
        $scope.DataGuru = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Guru"
        }).then(function (response) {
            $scope.DataGuru = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Guru",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataGuru.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Guru",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Guru?id_guru=" + item.id_guru,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataGuru.indexOf(item);
                $scope.DataGuru.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);