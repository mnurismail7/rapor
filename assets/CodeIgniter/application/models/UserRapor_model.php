<?php

class UserRapor_Model extends CI_Model
{
    public function login($data)
    {
        $Password = md5($data['Password']);
        $Username = $data['Username'];
        $result = $this->db->query("
            SELECT * FROM siswa WHERE (username = '$Username' OR email = '$Username') AND password = '$Password'
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