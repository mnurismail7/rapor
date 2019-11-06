<?php

class Guru_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Guru"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Guru", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_guru", $data->id_guru);
        $result = $this->db->update("Guru", $data);
        return $result;
    }
    public function Delete($id_guru)
    {
        $this->db->where("id_guru", $id_guru['id_guru']);
        $result = $this->db->delete("Guru");
        return $result;
    }
}