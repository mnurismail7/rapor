<?php

class Transaksi_Kelas_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Transaksi_Kelas"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Transaksi_Kelas", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_trxkelas", $data->id_trxkelas);
        $result = $this->db->update("Transaksi_Kelas", $data);
        return $result;
    }
    public function Delete($id_trxkelas)
    {
        $this->db->where("id_trxkelas", $id_trxkelas['id_trxkelas']);
        $result = $this->db->delete("Transaksi_Kelas");
        return $result;
    }
}