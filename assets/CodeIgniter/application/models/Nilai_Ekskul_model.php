<?php

class Nilai_Ekskul_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `transaksi_detail_kelas`.*,
            `guru`.`Nama_Guru`,
            `tahun_ajaran`.`Tahun_Ajar`,
            `tahun_ajaran`.`Semester`,
            `kelas`.`Kelas`,
            `siswa`.`Nama_Siswa`,
            `ekstrakurikuler`.`Ekskul`,
            `nilai_ekskul`.`Keterangan`
          FROM
            `transaksi_detail_kelas`
            LEFT JOIN `transaksi_kelas` ON `transaksi_detail_kelas`.`id_trxkelas` = `transaksi_kelas`.`id_trxkelas`
            LEFT JOIN `tahun_ajaran` ON `transaksi_kelas`.`id_tahun` = `tahun_ajaran`.`id_tahun`
            LEFT JOIN `guru` ON `transaksi_kelas`.`id_guru` = `guru`.`id_guru`
            LEFT JOIN `kelas` ON `transaksi_kelas`.`id_kelas` = `kelas`.`id_kelas`
            LEFT JOIN `nilai_ekskul` ON `transaksi_detail_kelas`.`NISN` = `nilai_ekskul`.`NISN`
            LEFT JOIN `siswa` ON `siswa`.`NISN` = `nilai_ekskul`.`NISN`
            LEFT JOIN `ekstrakurikuler` ON `ekstrakurikuler`.`id_ekskul` = `nilai_ekskul`.`id_ekskul`
            "); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Nilai_Ekskul", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Nilai_Ekskul", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Nilai_Ekskul");
        return $result;
    }
}