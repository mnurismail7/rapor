<?php

class Kelas_Model extends CI_Model
{
    public function GetKelas() 
    {
        $data = $this->db->get('Kelas');
        
        return $data->result_array();
    }
    public function InsertKelas($data)
    {
        $result = $this->db->Insert("Kelas", $data);
        return $result;
    }
}