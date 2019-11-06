<?php

class Ekstrakurikuler_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Ekstrakurikuler"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Ekstrakurikuler", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_ekskul", $data->id_ekskul);
        $result = $this->db->update("Ekstrakurikuler", $data);
        return $result;
    }
    public function Delete($id_ekskul)
    {
        $this->db->where("id_ekskul", $id_ekskul['id_ekskul']);
        $result = $this->db->delete("Ekstrakurikuler");
        return $result;
    }
}