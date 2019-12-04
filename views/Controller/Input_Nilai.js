(function (angular) {
    'use strict'
    angular.module("Input_Nilai", [])
    .controller("Input_NilaiController", function ($scope, $http) {
        $scope.DataInput_Nilai = [];
        $scope.Input = {};
        $scope.Status = "Simpan";
        $scope.Cari = "";
        $scope.Search = "";
        $scope.TampilNilai = false;
        // Cari
        $scope.DataNilai = [];
        // get dan pilih
        $scope.DataSiswa = [];
        $scope.DataWaliKelas = [];
        $scope.DataMapel = [];
        $scope.DataPnK = [];
        $scope.DataEkskul = [];

        $scope.DataNilai_Mapel = [];
        $scope.DataNilai_PnK = [];
        $scope.DataNilai_Ekskul = [];

        $scope.SelectedWaliKelas = {};
        $scope.SelectedSiswa = {};


        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
        }).then(function (response) {
            $scope.DataInput_Nilai = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // AMBIL DATA
        // SISWA
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
        }).then(function (response) {
            $scope.DataSiswa = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // MATA PELAJARAN
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
        }).then(function (response) {
            $scope.DataMapel = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // PERILAKU DAN KEPRIBADIAN
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
        }).then(function (response) {
            $scope.DataPnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // EKSTRAKURIKULER
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
        }).then(function (response) {
            $scope.DataEkskul = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // WALI KELAS
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
        }).then(function (response) {
            $scope.DataWaliKelas = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // NILAI MATA PELAJARAN
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel"
        }).then(function (response) {
            $scope.DataNilai_Mapel = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // NILAI PERILAKU DAN KEPRIBADIAN
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK"
        }).then(function (response) {
            $scope.DataNilai_PnK = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // NILAI EKSTRAKURIKULER
        $http({
            method: "get",
            url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul"
        }).then(function (response) {
            $scope.DataNilai_Ekskul = response.data.result;
        }, function (error) {
            console.log(error.message);
        });
        // AKHIR AMBIL DATA
        // $scope.CariSiswa = function () {
        //     $scope.DataNilai = [];
        //     angular.forEach($scope.DataInput_Nilai, function (value, key) {
        //         if (value.NISN === $scope.Cari) {
        //             $scope.DataNilai.push(angular.copy(value));
        //         }
        //     })
        //     if ($scope.DataNilai.length == 0) {
        //         $scope.TampilNilai = false;
        //     } else {
        //         $scope.TampilNilai = true;
        //     }
        // }
        $scope.SetData = function () {
            $scope.SelectedWaliKelas = {};
            angular.forEach($scope.DataWaliKelas, function (valueWaliKelas, KeyWaliKelas) {
                if (valueWaliKelas.Nama_Guru === $scope.Search){
                    $scope.SelectedWaliKelas.Nama_Guru = valueWaliKelas.Nama_Guru
                    $scope.SelectedWaliKelas.Tahun_Ajar = valueWaliKelas.Tahun_Ajar
                    $scope.SelectedWaliKelas.Semester = valueWaliKelas.Semester
                }
            })
            if ($scope.SelectedWaliKelas.length == 0) {
                $scope.SelectedWaliKelas = {};
            }
        }
        $scope.Simpan = function () {
            if ($scope.Status == "Simpan") {
                $scope.Input.Mapel = $scope.DataMapel;
                $scope.Input.Ekskul = $scope.DataEkskul;
                $scope.Input.Pnk = $scope.DataPnK;
                
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataInput_Nilai.push(angular.copy($scope.Input));
                    alert("INSERT SUKSES")
                }, function (error) {
                    console.log(error.message);
                });
            } else {
                $http({
                    method: "put",
                    url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas",
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
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas?id_detail=" + item.id_detail,
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                alert("DELETE SUKSES");
                var index = $scope.DataInput_Nilai.indexOf(item);
                $scope.DataInput_Nilai.splice(index, 1);
            }, function (error) {
                console.log(error.message);
            });
        }
    })
})(window.angular);