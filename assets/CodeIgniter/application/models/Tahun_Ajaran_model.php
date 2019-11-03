<?php

class Tahun_Ajaran_Model extends CI_Model
{
    public function GetTahun_Ajaran() 
    {
        $data = $this->db->get('Tahun_Ajaran');
        
        return $data->result_array();
    }
    public function InsertTahun_Ajaran($data)
    {
        $result = $this->db->Insert("Tahun_Ajaran", $data);
        return $result;
    }
}