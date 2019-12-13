<?php

class Transaksi_Detail_Kelas_Model extends CI_Model
{
    public function Get() 
    {    
        $data = $this->db->query(
        "SELECT
        `transaksi_detail_kelas`.`NISN`,
        `tahun_ajaran`.`Tahun_Ajar`,
        `tahun_ajaran`.`Semester`,
        `guru`.`Nama_Guru`,
        `kelas`.`Kelas`,
        `siswa`.`Nama_Siswa`
        FROM
        `transaksi_detail_kelas`
        LEFT JOIN `siswa` ON `siswa`.`NISN` = `transaksi_detail_kelas`.`NISN`
        LEFT JOIN `transaksi_kelas` ON `transaksi_kelas`.`id_trxkelas` = `transaksi_detail_kelas`.`id_trxkelas`
        LEFT JOIN `guru` ON `transaksi_kelas`.`id_guru` = `guru`.`id_guru`
        LEFT JOIN `tahun_ajaran` ON `transaksi_kelas`.`id_tahun` = `tahun_ajaran`.`id_tahun`
        LEFT JOIN `kelas` ON `transaksi_kelas`.`id_kelas` = `kelas`.`id_kelas`
        "); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Transaksi_Detail_Kelas", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_detail", $data->id_detail);
        $result = $this->db->update("Transaksi_Detail_Kelas", $data);
        return $result;
    }
    public function Delete($id_detail)
    {
        $this->db->where("id_detail", $id_detail['id_detail']);
        $result = $this->db->delete("Transaksi_Detail_Kelas");
        return $result;
    }
}