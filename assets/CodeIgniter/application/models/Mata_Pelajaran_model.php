<?php

class Mata_Pelajaran_Model extends CI_Model
{
    public function GetMata_Pelajaran() 
    {
        $data = $this->db->get('Mata_Pelajaran');
        
        return $data->result_array();
    }
    public function InsertMata_Pelajaran($data)
    {
        $result = $this->db->Insert("Mata_Pelajaran", $data);
        return $result;
    }
}