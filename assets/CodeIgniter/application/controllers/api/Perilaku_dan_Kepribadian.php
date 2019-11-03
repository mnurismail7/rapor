<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class Perilaku_dan_Kepribadian extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('Perilaku_dan_Kepribadian_model', 'Perilaku_dan_KepribadianModel');
    }
    public function Panggil()
    {
        $Output = $this->Perilaku_dan_KepribadianModel->GetPerilaku_dan_Kepribadian();
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

        $Output = $this->Perilaku_dan_KepribadianModel->InsertPerilaku_dan_Kepribadian(json_decode($data));
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