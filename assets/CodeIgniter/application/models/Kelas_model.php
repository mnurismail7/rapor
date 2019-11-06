<?php

class Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Kelas"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Kelas", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_kelas", $data->id_kelas);
        $result = $this->db->update("Kelas", $data);
        return $result;
    }
    public function Delete($id_kelas)
    {
        $this->db->where("id_kelas", $id_kelas['id_kelas']);
        $result = $this->db->delete("Kelas");
        return $result;
    }
}