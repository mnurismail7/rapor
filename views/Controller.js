(function (anngular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })
        .controller("SiswaController", function ($scope, $http) {
            $scope.DataSiswa = [];
            $scope.Input = {};
            $scope.JK = [{ 'jk': 'Laki-laki' }, { 'jk': 'Perempuan' }];
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
        .controller("GuruController", function ($scope, $http) {
            $scope.DataGuru = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Guru"
            }).then(function (response) {
                $scope.DataGuru = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Guru",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataGuru = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("MapelController", function ($scope, $http) {
            $scope.DataMapel = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
            }).then(function (response) {
                $scope.DataMapel = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataMapel = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("EkskulController", function ($scope, $http) {
            $scope.DataEkskul = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
            }).then(function (response) {
                $scope.DataEkskul = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataEkskul = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("PnKController", function ($scope, $http) {
            $scope.DataPnK = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
            }).then(function (response) {
                $scope.DataPnK = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method = "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataPnK = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("KelasController", function ($scope, $http) {
            $scope.DataKelas = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Kelas"
            }).then(function (response) {
                $scope.DataKelas = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Kelas",
                    data: $scope.Input,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    $scope.DataKelas = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        .controller("TahunController", function ($scope, $http) {
            $scope.DataTahun = [];
            $scope.Input = {};
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
            }).then(function (response) {
                $scope.DataTahun = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $http({
                    method: "post",
                    url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran",
                    data: $scope.Input,
                    header: {
                        'Content_Type': 'Application/jason'
                    }
                }).then(function (rspoonse) {
                    $scope.DataTahun = response.data.data;
                }, function (error) {
                    console.log(error.message);
                });
            }
        })


        /* Belum Dimasukkan Fungsi Simpan*/
        .controller("Nilai_MapelController", function ($scope, $http) {
            $scope.DataNilai_Mapel = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel"
            }).then(function (response) {
                $scope.DataNilai_Mapel = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("Nilai_PnKController", function ($scope, $http) {
            $scope.DataNilai_PnK = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK"
            }).then(function (response) {
                $scope.DataNilai_PnK = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("Nilai_EkskulController", function ($scope, $http) {
            $scope.DataNilai_Ekskul = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul"
            }).then(function (response) {
                $scope.DataNilai_Ekskul = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("WaliKelasController", function ($scope, $http) {
            $scope.DataTrxKelas = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataTrxKelas = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        .controller("RaporController", function ($scope, $http) {
            $scope.DataDetail_Kelas = [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataDetail_Kelas = response.data.data;
            }, function (error) {
                console.log(error.message);
            });
        })
        ;
})(window.angular);