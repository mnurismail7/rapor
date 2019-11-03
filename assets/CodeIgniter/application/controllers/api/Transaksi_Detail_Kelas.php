<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Transaksi_Detail_Kelas extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Transaksi_Detail_Kelas_model', 'Transaksi_Detail_KelasModel');
    }
    public function Panggil()
    {
        $Output = $this->Transaksi_Detail_KelasModel->GetTransaksi_Detail_Kelas();
        if($Output!=null || count($Output)>0)
        {
            $this->api_return(
                [
                    'status' => true,
                    'result' => $Output
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
        $data = $this->security->xss_clean($this->input->raw_input_stream);

        $Output = $this->Transaksi_Detail_KelasModel->InsertTransaksi_Detail_Kelas(json_decode($data));
        if($Output)
        {
            $this->api_return(
                [
                    'status' => true
            ],
            200);    
        }else{
            $this->api_return(
                ['status' => false
            ],
            400);
        }
    }
} 