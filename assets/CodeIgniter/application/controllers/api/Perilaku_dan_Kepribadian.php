<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Perilaku_dan_Kepribadian extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Perilaku_dan_Kepribadian_model', 'Perilaku_dan_KepribadianModel');
    }
    public function Panggil()
    {
        $result = $this->Perilaku_dan_KepribadianModel->Get();
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
        $result = $this->Perilaku_dan_KepribadianModel->Insert(json_decode($data));
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
        $result = $this->Perilaku_dan_KepribadianModel->Update(json_decode($data));
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
        $id_pnk = $_GET;
        $result = $this->Perilaku_dan_KepribadianModel->Delete($id_pnk);
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