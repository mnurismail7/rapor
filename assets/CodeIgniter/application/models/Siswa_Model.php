<?php

class Siswa_Model extends CI_Model
{
    public function GetSiswa() 
    {
        $data = $this->db->get("Siswa"); 
        return $data->result_array();
    }
    public function InsertSiswa($data)
    {
        $result = $this->db->insert("Siswa", $data);
        return $result;
    }
    public function UpdateSiswa($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Siswa", $data);
        return $result;
    }
    public function DeleteSiswa($id)
    {
        $this->db->where("NISN", $data['NISN']);
        $result = $this->db->delete("Siswa");
        return $result;
    }
}