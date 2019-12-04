(function (angular) {
    'use strict'
    angular.module("Daftar_Nilai", [])
    .controller("Daftar_NilaiController", function ($scope, $http) {
        $scope.DataDaftar_Nilai = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
        }).then(function (response) {
            $scope.DataDaftar_Nilai = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // $scope.Simpan = function () {
        //     if ($scope.Status == "Simpan") {
        //         $http({
        //             method: "post",
        //             url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas",
        //             data: $scope.Input,
        //             header: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }).then(function (response) {
        //             $scope.Daftar_Nilai.push(angular.copy($scope.Input));
        //             alert("INSERT SUKSES")
        //         }, function (error) {
        //             console.log(error.message);
        //         });
        //     } else {
        //         $http({
        //             method: "put",
        //             url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas",
        //             data: $scope.Input,
        //             header: {
        //                 "Content-Type": "application/json"
        //             }
        //         }).then(function (response) {
        //             alert("UPDATE SUKSES");
        //         }, function (error) {
        //             console.log(error.message);
        //         });
        //     }
        // }
        // $scope.Clear = function () {
        //     $scope.Status = "Simpan";
        //     $scope.Input = {};
        // }
        // $scope.GetDataItem = function (item) {
        //     $scope.Status = "Update"
        //     $scope.Input = item;
        // }
        // $scope.Hapus = function (item) {
        //     $http({
        //         method: "delete",
        //         url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas?id_detail=" + item.id_detail,
        //         header: {
        //             "Content-Type": "application/json"
        //         }
        //     }).then(function (response) {
        //         alert("DELETE SUKSES");
        //         var index = $scope.DataDaftar_Nilai.indexOf(item);
        //         $scope.DataRapor.splice(index, 1);
        //     }, function (error) {
        //         console.log(error.message);
        //     });
        // }
    })
})(window.angular);