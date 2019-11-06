<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Nilai_Mapel extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Nilai_Mapel_model', 'Nilai_MapelModel');
    }
    public function Panggil()
    {
        $result = $this->Nilai_MapelModel->Get();
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
        $result = $this->Nilai_MapelModel->Insert(json_decode($data));
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
        $result = $this->Nilai_MapelModel->Update(json_decode($data));
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
        $NISN = $_GET;
        $result = $this->Nilai_MapelModel->Delete($NISN);
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