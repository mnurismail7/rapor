<?php

class Transaksi_Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `transaksi_kelas`.`id_trxkelas`,
            `tahun_ajaran`.`Tahun_Ajar`,
            `tahun_ajaran`.`Semester`,
            `kelas`.`Kelas`,
            `guru`.`NIP`,
            `guru`.`Nama_Guru`
            FROM
            `transaksi_kelas`
            LEFT JOIN `kelas` ON `kelas`.`id_kelas` = `transaksi_kelas`.`id_kelas`
            LEFT JOIN `guru` ON `guru`.`id_guru` = `transaksi_kelas`.`id_guru`
            LEFT JOIN `tahun_ajaran` ON `tahun_ajaran`.`id_tahun` = `transaksi_kelas`.`id_tahun`
            "); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $this->db->insert("Transaksi_Kelas", $data);
        $result = $this->db->query(
            "SELECT
            `transaksi_kelas`.`id_trxkelas`,
            `transaksi_kelas`.`id_kelas`,
            `transaksi_kelas`.`id_tahun`
            FROM
            `transaksi_kelas`
            LEFT JOIN `kelas` ON `kelas`.`id_kelas` = `transaksi_kelas`.`id_kelas`
            LEFT JOIN `guru` ON `guru`.`id_guru` = `transaksi_kelas`.`id_guru`
            LEFT JOIN `tahun_ajaran` ON `tahun_ajaran`.`id_tahun` = `transaksi_kelas`.`id_tahun`
            WHERE
            transaksi_kelas.id_kelas = '$data->id_kelas' and
            transaksi_kelas.id_guru = '$data->id_guru' and
            transaksi_kelas.id_tahun = '$data->id_tahun'
            ");
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_trxkelas", $data->id_trxkelas);
        $result = $this->db->update("Transaksi_Kelas", $data);
        return $result;
    }
    public function Delete($id_trxkelas)
    {
        $this->db->where("id_trxkelas", $id_trxkelas['id_trxkelas']);
        $result = $this->db->delete("Transaksi_Kelas");
        return $result;
    }
}