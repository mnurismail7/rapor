<?php

class Nilai_Ekskul_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `siswa`.`Nama_Siswa`,
            `ekstrakurikuler`.`Ekskul`,
            `nilai_ekskul`.*
            FROM
            `siswa`
            RIGHT JOIN `nilai_ekskul` ON `siswa`.`NISN` = `nilai_ekskul`.`NISN`
            LEFT JOIN `ekstrakurikuler` ON `nilai_ekskul`.`id_ekskul` = `ekstrakurikuler`.`id_ekskul`
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