<?php

class Nilai_Mapel_Model extends CI_Model
{
    public function GetNilai_Mapel() 
    {
        $data = $this->db->get('Nilai_Mapel');
        
        return $data->result_array();
    }
    public function InsertNilai_Mapel($data)
    {
        $result = $this->db->Insert("Nilai_Mapel", $data);
        return $result;
    }
}