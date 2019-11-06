<?php

class Transaksi_Detail_Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Transaksi_Detail_Kelas"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Transaksi_Detail_Kelas", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_detail", $data->id_detail);
        $result = $this->db->update("Transaksi_Detail_Kelas", $data);
        return $result;
    }
    public function Delete($id_detail)
    {
        $this->db->where("id_detail", $id_detail['id_detail']);
        $result = $this->db->delete("Transaksi_Detail_Kelas");
        return $result;
    }
}