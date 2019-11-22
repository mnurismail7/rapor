<?php

class Transaksi_Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query("
        SELECT
        `tahun_ajaran`.`Tahun_Ajar`, `tahun_ajaran`.`Semester`, `kelas`.`Kelas`,
        `guru`.`NIP`, `guru`.`Nama_Guru`
        FROM
        `transaksi_kelas` RIGHT JOIN
        `kelas` ON `kelas`.`id_kelas` = `transaksi_kelas`.`id_kelas` RIGHT JOIN
        `guru` ON `guru`.`id_guru` = `transaksi_kelas`.`id_guru` RIGHT JOIN
        `tahun_ajaran` ON `tahun_ajaran`.`id_tahun` = `transaksi_kelas`.`id_tahun`;"
    ); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Transaksi_Kelas", $data);
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