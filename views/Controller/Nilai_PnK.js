(function (angular) {
    'use strict'
    angular.module("Nilai_PnK", [])
    .controller("Nilai_PnKController", function ($scope, $http) {
        $scope.DataNilai_PnK = [];
        $scope.Input = {};
        $scope.Ket = [{ 'ket': 'Sangat Kurang' }, { 'ket': 'Kurang' }, { 'ket': 'Baik' }, { 'ket': 'Sangat Baik' }];
        $scope.Status = "Simpan";
        $scope.DataSiswa = [];
        $scope.SelectedSiswa = {};

        // Get PnK
        $scope.DataPnK = [];
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
        }).then(function (response) {
            $scope.DataPnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        //Get Data Tabel Siswa
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
        }).then(function (response) {
            $scope.DataSiswa = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // Get Tabel Nilai Perilaku dan Kepribadian
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK"
        }).then(function (response) {
            $scope.DataNilai_PnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    angular.forEach($scope.DataSiswa, function (valueSiswa, KeySiswa) {
                        if (valueSiswa.NISN == $scope.Input.NISN)
                            $scope.Input.Nama_Siswa = valueSiswa.Nama_Siswa
                    })
                    angular.forEach($scope.DataPnK, function (valuePnk, KeyPnk) {
                        if (valuePnk.id_pnk == $scope.Input.id_pnk)
                            $scope.Input.Kategori = valuePnk.Kategori
                    })
                    $scope.DataNilai_PnK.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK?NISN=" + item.NISN,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataNilai_PnK.indexOf(item);
                $scope.DataNilai_PnK.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);