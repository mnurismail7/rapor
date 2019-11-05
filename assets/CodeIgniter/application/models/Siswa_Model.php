<?php

class Siswa_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Siswa"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Siswa", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Siswa", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Siswa");
        return $result;
    }
}