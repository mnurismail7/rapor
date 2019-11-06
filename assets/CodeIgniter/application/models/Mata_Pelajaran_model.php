<?php

class Mata_Pelajaran_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Mata_Pelajaran"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Mata_Pelajaran", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_mapel", $data->id_mapel);
        $result = $this->db->update("Mata_Pelajaran", $data);
        return $result;
    }
    public function Delete($id_mapel)
    {
        $this->db->where("id_mapel", $id_mapel['id_mapel']);
        $result = $this->db->delete("Mata_Pelajaran");
        return $result;
    }
}