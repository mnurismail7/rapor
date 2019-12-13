<?php 

class User_model extends CI_Model
{ 
    public function login($data)
    {
        $Password = $data['password'];
        $Username = $data['username'];
        $result = $this->db->query("
        SELECT
            *
        FROM
            `userrapor`
        LEFT JOIN `guru` ON `guru`.`id_user` = `userrapor`.`id_user`
             WHERE username = '$Username' AND password = '$Password'
        ");
        if($result->num_rows()>0){
            $message = [
                "data"=> $result->result_array(),
                "Status" => true
            ];
            return $message;
        }else{
            $message = [
                "Status" => false
            ];
            return $message;
        }
    }
}
