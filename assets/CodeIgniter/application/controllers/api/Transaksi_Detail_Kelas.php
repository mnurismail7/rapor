<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Transaksi_Detail_Kelas extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Transaksi_Detail_Kelas_model', 'Transaksi_Detail_KelasModel');
    }
    public function Panggil()
    {
        $result = $this->Transaksi_Detail_KelasModel->Get();
        if($result!=null || count($result)>0)
        {
            $this->api_return(
                [
                    'status' => true,
                    'result' => $result
                ], 200
            );    
        }else{
            $this->api_return(
                [
                    'status' => false
                ], 400
            );
        }
        
    }
    public function Tambah()
    {
        $data = $this->input->raw_input_stream;
        $result = $this->Transaksi_Detail_KelasModel->Insert(json_decode($data));
        if($result)
        {
            $this->api_return(
                [
                    'status' => true
                ],
            200
            );    
        }else{
            $this->api_return(
                [
                    'status' => false
                ], 400
            );
        }
    }
    public function Ubah()
    {
        $data = $this->input->raw_input_stream;
        $result = $this->Transaksi_Detail_KelasModel->Update(json_decode($data));
        if($result)
        {
            $this->api_return(
                [
                    'status' => true
                ],
            200);    
        }else{
            $this->api_return(
                [
                    'status' => false
                ],
            400);
        }
    }
    public function Hapus()
    {
        $id_detail = $_GET;
        $result = $this->Transaksi_Detail_KelasModel->Delete($id_detail);
        if($result)
        {
            $this->api_return(
                [
                    'status' => true
                ], 200
            );    
        }else{
            $this->api_return(
                [
                    'status' => false
                ], 400
            );
        }
    }
} 