<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Mata_Pelajaran extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Mata_Pelajaran_model', 'Mata_PelajaranModel');
    }
    public function Panggil()
    {
        $Output = $this->Mata_PelajaranModel->GetMata_Pelajaran();
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

        $Output = $this->Mata_PelajaranModel->InsertMata_Pelajaran(json_decode($data));
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