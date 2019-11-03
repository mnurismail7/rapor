<?php

class Transaksi_Detail_Kelas_Model extends CI_Model
{
    public function GetTransaksi_Detail_Kelas() 
    {
        $data = $this->db->get('Transaksi_Detail_Kelas');
        
        return $data->result_array();
    }
    public function InsertTransaksi_Detail_Kelas($data)
    {
        $result = $this->db->Insert("Transaksi_Detail_Kelas", $data);
        return $result;
    }
}