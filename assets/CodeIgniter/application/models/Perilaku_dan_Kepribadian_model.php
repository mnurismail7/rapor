<?php

class Perilaku_dan_Kepribadian_Model extends CI_Model
{
    public function GetPerilaku_dan_Kepribadian() 
    {
        $data = $this->db->get('Perilaku_dan_Kepribadian');
        
        return $data->result_array();
    }
    public function InsertPerilaku_dan_Kepribadian($data)
    {
        $result = $this->db->Insert("Perilaku_dan_Kepribadian", $data);
        return $result;
    }
}