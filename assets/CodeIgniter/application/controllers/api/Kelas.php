<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Kelas extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Kelas_model', 'KelasModel');
    }
    public function Panggil()
    {
        $result = $this->KelasModel->Get();
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
        $result = $this->KelasModel->Insert(json_decode($data));
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
        $result = $this->KelasModel->Update(json_decode($data));
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
        $id_kelas = $_GET;
        $result = $this->KelasModel->Delete($id_kelas);
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