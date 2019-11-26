<?php

class Transaksi_Detail_Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get(
            "SELECT
            *
          FROM
            `siswa` INNER JOIN
            `nilai_mapel` ON `siswa`.`NISN` = `nilai_mapel`.`NISN` INNER JOIN
            `mata_pelajaran` ON `mata_pelajaran`.`id_mapel` = `nilai_mapel`.`id_mapel`;"
    ); 
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