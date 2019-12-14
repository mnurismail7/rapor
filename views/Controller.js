(function (angular) {
    'use strict'
    angular.module("MyController", [])
        // User Control
        .controller("UserController", function ($scope, $http, $window) {
            $scope.DataUserRapor = [];
            $scope.Input = {};
            $scope.Login = function () {
                var Url = "http://localhost/rapor/assets/CodeIgniter/User?username=" + $scope.Input.username + "&password=" + $scope.Input.password;
                $http({
                    method: "get",
                    url: Url
                }).then(function (response) {
                    if(response.data.data.Status==true){
                        $scope.DataUserRapor = response.data.result;
                        $window.sessionStorage.setItem("username", response.data.data.data[0].username);
                        $window.sessionStorage.setItem("Nama", response.data.data.data[0].Nama_Guru);
                        $window.sessionStorage.setItem("id_user", response.data.data.data[0].id_user);

                        window.location.href = "index.html"
                    }else{
                        alert("Login Gagal");
                    }
                    
                    
                }, function (error) {
                    alert("GAGAL LOGIN");
                    // $window.sessionStorage.setItem("username", response.data.data.data.username);
                    // $window.sessionStorage.setItem("nama", response.data.data.data.nama);
                })
            }
        })
        // HOME
        .controller("HomeController", function ($scope, $http) {
            $scope.DataSiswa = [];
            $scope.DataGuru = [];
            $scope.DataMapel = [];
            $scope.DataPnK = [];
            $scope.DataEkskul = [];
            $scope.DataKelas = [];
            $scope.DataTahun = [];

            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
            }).then(function (response) {
                $scope.DataSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Guru"
            }).then(function (response) {
                $scope.DataGuru = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
            }).then(function (response) {
                $scope.DataMapel = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian"
            }).then(function (response) {
                $scope.DataPnK = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
            }).then(function (response) {
                $scope.DataEkskul = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Kelas"
            }).then(function (response) {
                $scope.DataKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
            }).then(function (response) {
                $scope.DataTahun = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
        })
        // SISWA
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
        // GURU
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
        // MATA PELAJARAN
        .controller("MapelController", function ($scope, $http) {
            $scope.DataMapel = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran"
            }).then(function (response) {
                $scope.DataMapel = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        $scope.DataMapel.push(angular.copy($scope.Input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran",
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran?id_mapel=" + item.id_mapel,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("DELETE SUKSES");
                    var index = $scope.DataMapel.indexOf(item);
                    $scope.DataMapel.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // EKSTRAKURIKULER
        .controller("EkskulController", function ($scope, $http) {
            $scope.DataEkskul = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler"
            }).then(function (response) {
                $scope.DataEkskul = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        $scope.DataEkskul.push(angular.copy($scope.Input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler",
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler?id_ekskul=" + item.id_ekskul,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("DELETE SUKSES");
                    var index = $scope.DataEkskul.indexOf(item);
                    $scope.DataEkskul.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // PERILAKU DAN KEPRIBADIAN 
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
        // KELAS
        .controller("KelasController", function ($scope, $http) {
            $scope.DataKelas = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Kelas"
            }).then(function (response) {
                $scope.DataKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Kelas",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        $scope.DataKelas.push(angular.copy($scope.Input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Kelas",
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Kelas?id_kelas=" + item.id_kelas,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("DELETE SUKSES");
                    var index = $scope.DataKelas.indexOf(item);
                    $scope.DataKelas.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // TAHUN AJARAN
        .controller("TahunController", function ($scope, $http) {
            $scope.DataTahun = [];
            $scope.Input = {};
            $scope.Smes = [{ 'smes': 'Ganjil' }, { 'smes': 'Genap' }];
            $scope.Stats = [{ 'stats': 'Aktif' }, { 'stats': 'Tidak Aktif' }];
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
            }).then(function (response) {
                $scope.DataTahun = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                $scope.Input.status = "Aktif";
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        angular.forEach($scope.DataTahun, function (value, key) {
                            if (value.status == "Aktif")
                                value.status = "Tidak Aktif";
                        })
                        $scope.DataTahun.push(angular.copy($scope.Input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran",
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran?id_tahun=" + item.id_tahun,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("DELETE SUKSES");
                    var index = $scope.DataTahun.indexOf(item);
                    $scope.DataTahun.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // WALIKELAS
        .controller("WaliKelasController", function ($scope, $http) {
            $scope.DataWaliKelas = [];
            $scope.DataTahun = [];
            $scope.DataKelas = [];
            $scope.DataGuru = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            // AMBIL DATA
            // TAHUN
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
            }).then(function (response) {
                $scope.DataTahun = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // KELAS
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Kelas"
            }).then(function (response) {
                $scope.DataKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // GURU
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Guru"
            }).then(function (response) {
                $scope.DataGuru = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // AKHIR AMBIL DATA
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataWaliKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $scope.Simpan = function () {
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        angular.forEach($scope.DataTahun, function (valueTahun, KeyTahun) {
                            if (valueTahun.id_tahun == $scope.Input.id_tahun)
                                $scope.Input.Tahun_Ajar = valueTahun.Tahun_Ajar;
                            $scope.Input.Semester = valueTahun.Semester
                        })
                        angular.forEach($scope.DataKelas, function (valueKelas, KeyKelas) {
                            if (valueKelas.id_kelas == $scope.Input.id_kelas)
                                $scope.Input.Kelas = valueKelas.Kelas
                        })
                        angular.forEach($scope.DataGuru, function (valueGuru, KeyGuru) {
                            if (valueGuru.id_guru == $scope.Input.id_guru)
                                $scope.Input.Nama_Guru = valueGuru.Nama_Guru;
                            $scope.Input.NIP = valueGuru.NIP
                        })
                        $scope.DataWaliKelas.push(angular.copy($scope.Input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas",
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas?id_trxkelas=" + item.id_trxkelas,
                    header: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    alert("DELETE SUKSES");
                    var index = $scope.DataWaliKelas.indexOf(item.id_trxkelas);
                    $scope.DataWaliKelas.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // KELAS SISWA
        .controller("KelasSiswaController", function($scope, $http){
            $scope.DataKelasSiswa = [];
            $scope.DataSiswa = [];
            $scope.DataWaliKelas = [];
            $scope.Input = {};
            $scope.SelectedSiswa = {};
            $scope.Status = "Simpan";

            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
            }).then(function (response) {
                $scope.DataSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataWaliKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataKelasSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
        
            $scope.Simpan = function () {
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        angular.forEach($scope.DataSiswa, function (valueGuru, KeyGuru) {
                            if (valueGuru.NISN == $scope.Input.NISN)
                                $scope.Input.Nama_Siswa = valueGuru.Nama_Siswa;
                                
                        })
                        angular.forEach($scope.DataWaliKelas, function (valueGuru, KeyGuru) {
                            if (valueGuru.id_trxkelas == $scope.Input.id_trxkelas)
                                $scope.Input.Nama_Guru = valueGuru.Nama_Guru;
                                $scope.Input.Semester = valueGuru.Semester;
                                $scope.Input.Tahun_Ajar = valueGuru.Tahun_Ajar;
                                $scope.Input.Kelas = valueGuru.Kelas
                        })
                        $scope.DataKelasSiswa.push(angular.copy($scope.Input));
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
                    var index = $scope.DataKelasSiswa.indexOf(item);
                    $scope.DataKelasSiswa.splice(index, 1);
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        // INPUT NILAI
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
            //pilihan
            $scope.Ket = [{ 'ket': 'Sangat Kurang' }, { 'ket': 'Kurang' }, { 'ket': 'Baik' }, { 'ket': 'Sangat Baik' }];
            $scope.KetEks = [{ 'ketE': 'Aktif Mengikuti Kegiatan' }, { 'ketE': 'Tidak Aktif' }];
            
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataInput_Nilai = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // AMBIL DATA
            // TRANSAKSI DETAIL KELAS
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataKelasSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
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
             // NILAI MATA PELAJARAN
             $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK"
            }).then(function (response) {
                $scope.DataNilai_PnK = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
             // NILAI MATA PELAJARAN
             $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul"
            }).then(function (response) {
                $scope.DataNilai_Ekskul = response.data.result;
            }, function (error) {
                console.log(error.message);
            });

            $scope.SetData = function () {
                $scope.SelectedWaliKelas = {};
                angular.forEach($scope.DataWaliKelas, function (value, key) {
                    if (value.Nama_Guru === $scope.Search) {
                        $scope.SelectedWaliKelas.Nama_Guru = value.Nama_Guru
                        $scope.SelectedWaliKelas.Tahun_Ajar = value.Tahun_Ajar
                        $scope.SelectedWaliKelas.Semester = value.Semester
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
                        url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel",
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
        // TAMPIL NILAI
        .controller("Tampil_NilaiController", function ($scope, $http) {
            $scope.DataSiswa = [];
            $scope.SelectedSiswa = {};
            $scope.DataWaliKelas = [];
            $scope.SelectedWaliKelas = {};
            $scope.DataKelasSiswa = [];
            $scope.SelectedKelasSiswa = {};

            $scope.DataNilai_Mapel = [];
            $scope.SelectedNilai_Mapel = {};
            $scope.DataNilai_PnK = [];
            $scope.SelectedNilai_PnK = {};
            $scope.DataNilai_Ekskul = [];
            $scope.SelectedNilai_Ekskul = {};
            
            $scope.TampilHasil = false;

            $scope.Search = "";
            $scope.hideprint = true;
            var a = $scope.SelectedSiswa.valueOf.length;
            // Siswa
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Siswa"
            }).then(function (response) {
                $scope.DataSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Walikelas
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataWaliKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Kelas Siswa
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataKelasSiswa = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Nilai Mapel
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel"
            }).then(function (response) {
                $scope.DataNilai_Mapel = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Nilai PnK
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK"
            }).then(function (response) {
                $scope.DataNilai_PnK = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Nilai Ekskul
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul"
            }).then(function (response) {
                $scope.DataNilai_Ekskul = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
        
            $scope.SetData = function () {
                $scope.SelectedSiswa = {};
                $scope.SelectedWaliKelas={};
                $scope.TampilHasil=false;
                
                angular.forEach($scope.DataKelasSiswa, function (value, key) {
                    if (value.NISN == $scope.Search) {
                        $scope.SelectedSiswa = value;
                        $scope.TampilHasil=true;
                        $scope.SelectedWaliKelas=value;
                        $scope.TampilHasil=true;                      
                    }
                })
            }

            $scope.DetailNilai = [];
            $scope.GetData = function(item){
                $scope.DetailNilai=item.Nilai_Mapel;
                $scope.DetailNilai=item.Nilai_PnK;
                $scope.DetailNilai=item.Nilai_Ekskul;
            }
            $scope.Cetak = function (print) {
                var innerContents = document.getElementById(print).innerHTML;
                var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                popupWinindow.document.open();
                popupWinindow.document.write('<html><head></head><body onload="window.print()"><div>' + innerContents + '</html>');
                popupWinindow.document.close();
            }
        })
        //   
        // MAU DI HAPUS
        // Controller Nilai Mata Pelajaran
        .controller("Nilai_MapelController", function ($scope, $http) {
            $scope.DataNilai_Mapel = [];
            $scope.DataWaliKelas = [];
            $scope.DataSiswa = [];
            $scope.DataMapel = [];
            $scope.DataTahun = [];
            $scope.Input = {};
            $scope.input = {};
            $scope.Status = "Simpan";
            $scope.SelectedSiswa = {};
            $scope.SelectedWaliKelas = {};
            $scope.Search = "";
            $scope.Cari = "";
            var a = $scope.SelectedSiswa.valueOf.length;
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
            //Get Tabel Tahun Ajaran
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran"
            }).then(function (response) {
                $scope.DataTahun = response.data.result;
            }, function (error) {
                console.log(error.message);
            });
            // Get Tabel Wali Kelas
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataWaliKelas = response.data.result;
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
            $scope.SetData = function () {
                $scope.SelectedWaliKelas = {};
                angular.forEach($scope.DataWaliKelas, function (value, key) {
                    if (values.id_trxkelas === $scope.Search) {
                        $scope.SelectedWaliKelas.Nama_Guru = value.Nama_Guru
                        $scope.SelectedWaliKelas.Tahun_Ajar = value.Tahun_Ajar
                        $scope.SelectedWaliKelas.Semester = value.Semester
                    }
                })
                if ($scope.SelectedWaliKelas.length == 0) {
                    $scope.SelectedWaliKelas = {};
                }
            }
            $scope.Simpan = function () {
                $scope.input = {};
                $scope.input.NISN = $scope.Input.NISN;
                $scope.input.Mapel = $scope.DataMapel;
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel",
                        data: $scope.input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        $scope.input = {};
                        $scope.DataNilai_Mapel.push(angular.copy($scope.input));
                        alert("INSERT SUKSES")
                    }, function (error) {
                        console.log(error.message);
                    });
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel",
                        data: $scope.input,
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
        // Controller Nilai Perilaku dan Kepribadian
        .controller("Nilai_PnKController", function ($scope, $http) {
            $scope.DataNilai_PnK = [];
            $scope.Input = {};
            $scope.Ket = [{ 'ket': 'Sangat Kurang' }, { 'ket': 'Kurang' }, { 'ket': 'Baik' }, { 'ket': 'Sangat Baik' }];
            $scope.Status = "Simpan";
            // Get Tabel Transaksi Kelas
            $scope.DataWaliKelas =  [];
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas"
            }).then(function (response) {
                $scope.DataWaliKelas = response.data.result;
            }, function (error) {
                console.log(error.message);
            });

            // GetTabel PnK
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
            $scope.DataSiswa = [];
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
            // Select key id_trx_kelas untuk id_trxkelas
            $scope.SelectedWaliKelas = {};


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
        // Controller Nilai Ekstrakurikuler
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