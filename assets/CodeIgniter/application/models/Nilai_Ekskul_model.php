<?php

class Nilai_Ekskul_Model extends CI_Model
{
    public function GetNilai_Ekskul() 
    {
        $data = $this->db->get('Nilai_Ekskul');
        
        return $data->result_array();
    }
    public function InsertNilai_Ekskul($data)
    {
        $result = $this->db->Insert("Nilai_Ekskul", $data);
        return $result;
    }
}