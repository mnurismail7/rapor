<?php

class Transaksi_Kelas_Model extends CI_Model
{
    public function GetTransaksi_Kelas() 
    {
        $data = $this->db->get('Transaksi_Kelas');
        
        return $data->result_array();
    }
    public function InsertTransaksi_Kelas($data)
    {
        $result = $this->db->Insert("Transaksi_Kelas", $data);
        return $result;
    }
}