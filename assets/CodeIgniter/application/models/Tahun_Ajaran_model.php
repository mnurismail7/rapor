<?php

class Tahun_Ajaran_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Tahun_Ajaran"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $update = $this->UpdateStatus();
        if($update){
            $result = $this->db->insert("Tahun_Ajaran", $data);
            return $result;
        }else{
            return false;
        } 
    }
    public function UpdateStatus()
    {
        $this->db->set("status", "Tidak Aktif");
        $this->db->where("status", "Aktif");
        $result = $this->db->update("Tahun_Ajaran");
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_tahun", $data->id_tahun);
        $result = $this->db->update("Tahun_Ajaran", $data);
        return $result;
    }
    public function Delete($id_tahun)
    {
        $this->db->where("id_tahun", $id_tahun['id_tahun']);
        $result = $this->db->delete("Tahun_Ajaran");
        return $result;
    }
    
    
}