(function (anngular) {
    'use strict'
    angular.module("MyController", [])
        .controller("HomeController", function ($scope, $http) {

        })

        //Controller Siswa
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Siswa?NISN="+item.NISN,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        
        //Controller Guru
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Guru?id_guru="+item.id_guru,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Mata Pelajaran 
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Mata_Pelajaran?id_mapel="+item.id_mapel,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Ekstrakurikuler
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
                            alert("Berhasil Menambah Data")
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
                            alert("Berhasil Mengubah Data");
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
                        url: "http://localhost/rapor/assets/CodeIgniter/Ekstrakurikuler?id_ekskul="+item.id_ekskul,
                        header: {
                            "Content-Type" : "application/json"
                        }
                    }).then(function (response) {
                        alert("Berhasil Menghapus Data");
                    }, function (error) {
                        console.log(error.message);
                    });
                }
            })

        // Controller Perilaku dan Kepribadian 
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Perilaku_dan_Kepribadian?id_pnk="+item.id_pnk,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        
        // Controller Kelas
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Kelas?id_kelas="+item.id_kelas,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Tahun
        .controller("TahunController", function ($scope, $http) {
            $scope.DataTahun = [];
            $scope.Input = {};
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
                if ($scope.Status == "Simpan") {
                    $http({
                        method: "post",
                        url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran",
                        data: $scope.Input,
                        header: {
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        $scope.DataTahun.push(angular.copy($scope.Input));
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Tahun_Ajaran?id_tahun="+item.id_tahun,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Nilai Mata Pelajaran
        .controller("Nilai_MapelController", function ($scope, $http) {
            $scope.DataNilai_Mapel = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Mapel?NISN="+item.NISN,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Nilai Perilaku dan Kepribadian
        .controller("Nilai_PnKController", function ($scope, $http) {
            $scope.DataNilai_PnK = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
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
                        $scope.DataNilai_PnK.push(angular.copy($scope.Input));
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_PnK?NISN="+item.NISN,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
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
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Nilai_Ekskul?NISN="+item.NISN,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        // Controller Wali Kelas
        .controller("WaliKelasController", function ($scope, $http) {
            $scope.DataWaliKelas = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
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
                        $scope.DataWaliKelas.push(angular.copy($scope.Input));
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Kelas?id_trxkelas="+item.id_trxkelas,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })
        
        // Controller Rapor
        .controller("RaporController", function ($scope, $http) {
            $scope.DataRapor = [];
            $scope.Input = {};
            $scope.Status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas"
            }).then(function (response) {
                $scope.DataRapor = response.data.result;
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
                        $scope.DataRapor.push(angular.copy($scope.Input));
                        alert("Berhasil Menambah Data")
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
                        alert("Berhasil Mengubah Data");
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
                    url: "http://localhost/rapor/assets/CodeIgniter/Transaksi_Detail_Kelas?id_detail="+item.id_detail,
                    header: {
                        "Content-Type" : "application/json"
                    }
                }).then(function (response) {
                    alert("Berhasil Menghapus Data");
                }, function (error) {
                    console.log(error.message);
                });
            }
        })

        ;
})(window.angular);