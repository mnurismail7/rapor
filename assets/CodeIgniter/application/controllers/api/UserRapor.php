<?php defined('BASEPATH') or exit('No direct script access allowed'); 
 
require APPPATH . '/libraries/API_Controller.php'; 
 
class UserRapor extends API_Controller {     
    public function __construct() {
        parent::__construct();     
        $this->load->model('UserRapor_model', 'UserRaporModel');
    }
    
    public function Login()
    {
        $data = $_GET;
        $result = $this->UserRaporModel->login($data);
        $this->api_return(
            [
                "data"=>$result
            ], 200
        );
    }
}