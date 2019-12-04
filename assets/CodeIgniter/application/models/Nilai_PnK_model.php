<?php

class Nilai_Pnk_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `nilai_pnk`.*, `siswa`.`Nama_Siswa`, `perilaku_dan_kepribadian`.`Kategori`
            FROM
            `nilai_pnk` 
            LEFT JOIN `perilaku_dan_kepribadian` ON `nilai_pnk`.`id_pnk` =
            `perilaku_dan_kepribadian`.`id_pnk` 
            LEFT JOIN `siswa` ON `nilai_pnk`.`NISN` = `siswa`.`NISN`");
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Nilai_Pnk", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Nilai_Pnk", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Nilai_Pnk");
        return $result;
    }
}