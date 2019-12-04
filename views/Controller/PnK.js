(function (angular) {
    'use strict'
    angular.module("PnK", [])
    .controller("PnKController", function ($scope, $http) {
        $scope.DataPnK = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
        }).then(function (response) {
            $scope.DataPnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataPnK.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian?id_pnk=" + item.id_pnk,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataPnK.indexOf(item);
                $scope.DataPnK.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);