<?php

class Guru_Model extends CI_Model
{
    public function GetGuru() 
    {
        $data = $this->db->get('Guru');
        
        return $data->result_array();
    }
    public function InsertGuru($data)
    {
        $result = $this->db->Insert("Guru", $data);
        return $result;
    }
}