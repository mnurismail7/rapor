<?php

class Perilaku_dan_Kepribadian_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->get("Perilaku_dan_Kepribadian"); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Perilaku_dan_Kepribadian", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("id_pnk", $data->id_pnk);
        $result = $this->db->update("Perilaku_dan_Kepribadian", $data);
        return $result;
    }
    public function Delete($id_pnk)
    {
        $this->db->where("id_pnk", $id_pnk['id_pnk']);
        $result = $this->db->delete("Perilaku_dan_Kepribadian");
        return $result;
    }
}