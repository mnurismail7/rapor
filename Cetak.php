<!DOCTYPE html>
<html lang="en" ng-app="Rapor">

<head>
    <style type="text/css">
        td {
            vertical-align: middle;
            text-align: left;
        }
        td .kiri {
            vertical-align: middle;
            text-align: left;
        }
    </style>
</head>

<body>
    <!-- AWAL -->
    <table border="0">
        <tr>
            <th width="640px" colspan="6">LAPORAN</th>
        </tr>
        <tr>
            <th width="640px" colspan="6">HASIL ULANGAN TENGAH SEMESTER 1 (GANJIL)</th>
        </tr>
        <tr>
            <th width="640px" colspan="6">TAHUN AJARAN {{item.Tahun_Ajar}}</th>
        </tr>
    </table>
    <br>
    <table border="1px" cellpadding="0" cellspacing="0">
        <tr>
            <td width="40px">NO</td>
            <td width="250px" colspan="2">NAMA PESERTA DIDIK</td>
            <td width="50px">L/P</td>
            <td width="150px">NISN</td>
            <td width="150px">KELAS</td>
        </tr>
        <tr>
            <th width="40px">no</th>
            <th width="250px" colspan="2">nama</th>
            <th width="50px">l/p</th>
            <th width="150px">nisn</th>
            <th width="150px">nama ortu</th>
        </tr>
    </table>
    <br>
    <table border="1px" cellpadding="0" cellspacing="0">
        <tr>
            <th width="40px" rowspan="2">No</th>
            <th width="200px" rowspan="2">Mata Pelajaran</th>
            <th width="50px" rowspan="2">KKM</th>
            <th width="200px" colspan="2">Nilai</th>
            <th width="150px" rowspan="2">Deskripsi Kemajuan Belajar</th>
        </tr>
        <tr>
            <th width="50px" >Angka</th>
            <th width="150px">Huruf</th>
        </tr>
        <tr>
            <td width="40px">{{$index+1}}}}</td>
            <td width="200px">{{item.Mata_Pelajaran}}</td>
            <td width="50px">{{item.KKM}}</td>
            <td width="50px">{{item.Nilai}}</td>
            <td width="150px">fungsi konver huruf</td>
            <td width="150px">fungsi if</td>
        </tr>
        <tr>
            <td width="40px"></td>
            <td width="250px" colspan="2"></td>
            <td width="50px">hasil hitung</td>
            <td width="300px" colspan="2"></td>
        </tr>
    </table>
    <br>
    <table border="1px" cellpadding="0" cellspacing="0">
        <tr>
            <th width="290px" colspan="3">Kegiatan Pengembangan Diri</th>
            <th width="50px">Nilai</th>
            <th width="300px" colspan="2">Keterangan</th>
        </tr>
        <tr>
            <td width="40px">{{$index+1}}</td>
            <td width="250px" colspan="2">{{item.Ekstrakurikuler}}</td>
            <td width="50px">{{item.Keterangan}}</td>
            <td width="300px" colspan="2">Konver Nilai</td>
        </tr>
    </table>
    <br>
    <table  border="1px" cellpadding="0" cellspacing="0">
        <tr>
            <th width="290px" colspan="3">Aspek Perilaku dan Kepribadian</th>
            <th width="50px">Nilai</th>
            <th width="150px">Keterangan Absensi</th>
            <th width="150px">Jumlah Hari</th>
        </tr>
        <tr>
            <td width="40px">1.</td>
            <td width="250px" colspan="2">{{item.PnK}}</td>
            <td width="50px">{{item.Keterangan}}</td>
            <td width="150px">Sakit</td>
            <td width="150px">{{item.Sakit}}</td>
        </tr>
        <tr>
            <td width="40px">2.</td>
            <td width="250px" colspan="2">{{item.PnK}}</td>
            <td width="50px">{{item.Keterangan}}</td>
            <td width="150px">Izin</td>
            <td width="150px">{{item.Izin}}</td>
        </tr>
        <tr>
            <td width="40px">3.</td>
            <td width="250px" colspan="2">{{item.PnK}}</td>
            <td width="50px">{{item.Keterangan}}</td>
            <td width="150px">Tanpa Keterangan</td>
            <td width="150px">{{item.Alpa}}</td>
        </tr>
        <tr>
            <td width="40px">4.</td>
            <td width="250px" colspan="2">{{item.PnK}}</td>
            <td width="50px">{{item.Keterangan}}</td>
            <th width="150px">Jumlah</th>
            <th width="150px">Hitung</th>
        </tr>
    </table>
    <br>
    <table border="0px">
        <tr>
            <td width=40px></td>
            <td width="250px">Mengetahui,</td>
            <td width="100px" colspan="2"></td>
            <td width="300px" colspan="2">Nabire, 12 Oktober 2015</td>
        </tr>
        <tr>
            <td width=40px></td>
            <td width="250px">Orang Tua/Wali,</td>
            <td width="100px" colspan="2"></td>
            <td width="150px">Wali Kelas,</td>
            <td width="150px"></td>
        </tr>
    </table>
    <br><br><br>
    <table border="0px">
        <tr>
            <td width=40px></td>
            <th width="250px">{{item.Nama_Ortu}}</th>
            <td width="100px" colspan="2"></td>
            <td width="150px">{{item.Nama_Guru}}</td>
            <td width="150px"></td>
        </tr>
        <tr>
            <td width=40px></td>
            <th width="250px"></th>
            <td width="100px" colspan="2"></td>
            <td width="150px">NIP {{item.NIP}}</td>
            <td width="150px"></td>
        </tr>
    </table>
    <script>
        // window.print()
    </script>
</body>

</html>