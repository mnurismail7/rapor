<?php

class UserRapor_Model extends CI_Model
{
    public function login($data)
    {
        $password = md5($data['password']);
        $username = $data['username'];
        $result = $this->db->query("
            SELECT * FROM userrapor WHERE (username = '$username' OR email = '$username') AND password = '$password'
        ");
        if($result->num_rows()>0){
            $message = [
                "data"=> $result->result_array(),
                "Status" => true
            ];
            return $message;
        }else{
            $message = [
                "Status" => true
            ];
            return $message;
        }
    }
}