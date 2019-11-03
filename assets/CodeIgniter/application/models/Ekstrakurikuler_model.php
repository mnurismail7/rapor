<?php

class Ekstrakurikuler_Model extends CI_Model
{
    public function GetEkstrakurikuler() 
    {
        $data = $this->db->get("Ekstrakurikuler"); 
        return $data->result_array();
    }
    public function InsertEkstrakurikuler($data)
    {
        $result = $this->db->insert("Ekstrakurikuler", $data);
        return $result;
    }
    public function UpdateEkstrakurikuler($data)
    {
        $this->db->where("id_ekskul", $data->id_ekskul);
        $result = $this->db->update("Ekstrakurikuler", $data);
        return $result;
    }
    public function DeleteEkstrakurikuler($id)
    {
        $this->db->where("id_ekskul", $data['id_ekskul']);
        $result = $this->db->delete("Ekstrakurikuler");
        return $result;
    }
}