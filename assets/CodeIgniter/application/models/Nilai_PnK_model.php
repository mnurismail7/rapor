<?php

class Nilai_Pnk_Model extends CI_Model
{
    public function GetNilai_Pnk() 
    {
        $data = $this->db->get('Nilai_Pnk');
        
        return $data->result_array();
    }
    public function InsertNilai_Pnk($data)
    {
        $result = $this->db->Insert("Nilai_Pnk", $data);
        return $result;
    }
}