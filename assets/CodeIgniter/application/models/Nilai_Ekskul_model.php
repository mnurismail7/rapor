<?php

class Nilai_Ekskul_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Nilai_Ekskul"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Nilai_Ekskul", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Nilai_Ekskul", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Nilai_Ekskul");
        return $result;
    }
}