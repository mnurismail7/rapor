<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


$route['API'] = 'Rest_server';

// User API Routes
$route['Siswa']['get'] = 'api/Siswa/Panggil'; 
$route['Siswa']['post'] = 'api/Siswa/Tambah';
$route['Siswa']['put'] = 'api/Siswa/Ubah';
$route['Siswa']['delete'] = 'api/Siswa/Hapus';
$route['Ekstrakurikuler']['get'] = 'api/Ekstrakurikuler/Panggil'; 
$route['Ekstrakurikuler']['post'] = 'api/Ekstrakurikuler/Tambah';
$route['Ekstrakurikuler']['put'] = 'api/Ekstrakurikuler/Ubah'; 
$route['Ekstrakurikuler']['delete'] = 'api/Ekstrakurikuler/Hapus';
$route['Guru']['get'] = 'api/Guru/Panggil'; 
$route['Guru']['post'] = 'api/Guru/Tambah';
$route['Guru']['put'] = 'api/Guru/Ubah'; 
$route['Guru']['delete'] = 'api/Guru/Hapus';
$route['Kelas']['get'] = 'api/Kelas/Panggil'; 
$route['Kelas']['post'] = 'api/Kelas/Tambah';
$route['Kelas']['put'] = 'api/Kelas/Ubah'; 
$route['Kelas']['delete'] = 'api/Kelas/Hapus';
$route['Mata_Pelajaran']['get'] = 'api/Mata_Pelajaran/Panggil'; 
$route['Mata_Pelajaran']['post'] = 'api/Mata_Pelajaran/Tambah';
$route['Mata_Pelajaran']['put'] = 'api/Mata_Pelajaran/Ubah'; 
$route['Mata_Pelajaran']['delete'] = 'api/Mata_Pelajaran/Hapus';
$route['Nilai_Ekskul']['get'] = 'api/Nilai_Ekskul/Panggil'; 
$route['Nilai_Ekskul']['post'] = 'api/Nilai_Ekskul/Tambah';
$route['Nilai_Ekskul']['put'] = 'api/Nilai_Ekskul/Ubah'; 
$route['Nilai_Ekskul']['delete'] = 'api/Nilai_Ekskul/Hapus';
$route['Nilai_Mapel']['get'] = 'api/Nilai_Mapel/Panggil'; 
$route['Nilai_Mapel']['post'] = 'api/Nilai_Mapel/Tambah';
$route['Nilai_Mapel']['put'] = 'api/Nilai_Mapel/Ubah'; 
$route['Nilai_Mapel']['delete'] = 'api/Nilai_Mapel/Hapus';
$route['Nilai_PnK']['get'] = 'api/Nilai_PnK/Panggil'; 
$route['Nilai_PnK']['post'] = 'api/Nilai_PnK/Tambah';
$route['Nilai_PnK']['put'] = 'api/Nilai_PnK/Ubah'; 
$route['Nilai_PnK']['delete'] = 'api/Nilai_PnK/Hapus';
$route['Perilaku_dan_Kepribadian']['get'] = 'api/Perilaku_dan_Kepribadian/Panggil'; 
$route['Perilaku_dan_Kepribadian']['post'] = 'api/Perilaku_dan_Kepribadian/Tambah';
$route['Perilaku_dan_Kepribadian']['put'] = 'api/Perilaku_dan_Kepribadian/Ubah'; 
$route['Perilaku_dan_Kepribadian']['delete'] = 'api/Perilaku_dan_Kepribadian/Hapus';
$route['Tahun_Ajaran']['get'] = 'api/Tahun_Ajaran/Panggil'; 
$route['Tahun_Ajaran']['post'] = 'api/Tahun_Ajaran/Tambah';
$route['Tahun_Ajaran']['put'] = 'api/Tahun_Ajaran/Ubah'; 
$route['Tahun_Ajaran']['delete'] = 'api/Tahun_Ajaran/Hapus';
$route['Transaksi_Kelas']['get'] = 'api/Transaksi_Kelas/Panggil'; 
$route['Transaksi_Kelas']['post'] = 'api/Transaksi_Kelas/Tambah';
$route['Transaksi_Kelas']['put'] = 'api/Transaksi_Kelas/Ubah'; 
$route['Transaksi_Kelas']['delete'] = 'api/Transaksi_Kelas/Hapus';
$route['Transaksi_Detail_Kelas']['get'] = 'api/Transaksi_Detail_Kelas/Panggil'; 
$route['Transaksi_Detail_Kelas']['post'] = 'api/Transaksi_Detail_Kelas/Tambah';
$route['Transaksi_Detail_Kelas']['put'] = 'api/Transaksi_Detail_Kelas/Ubah'; 
$route['Transaksi_Detail_Kelas']['delete'] = 'api/Transaksi_Detail_Kelas/Hapus';
//login route
$route['UserRapor']['get'] = 'api/UserRapor/Login';