<?php

class Nilai_Mapel_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `nilai_mapel`.*,
            `siswa`.`Nama_Siswa`,
            `mata_pelajaran`.`Mata_Pelajaran`
            FROM
            `siswa`
            RIGHT JOIN `nilai_mapel` ON `siswa`.`NISN` = `nilai_mapel`.`NISN`
            LEFT JOIN `mata_pelajaran` ON `nilai_mapel`.`id_mapel` =
              `mata_pelajaran`.`id_mapel`
            "); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        // $result = $this->db->insert("Nilai_Mapel", $data);
        // return $result;
        $this->db->trans_start();
        $DataNilai_Mapel = [
            'id_mapel'=>$data->id_mapel,
            'Nilai' =>$data->Nilai,
            'Sakit' =>$data->Sakit,
            'Izin' =>$data->Izin,
            'Alpa' =>$data->Alpa
            ];
        $this->db->insert('Nilai_Mapel', $DataNilai_Mapel);
        $NISN = $this->db->insert_NISN();
        foreach ($data->Transaksi_Detail_Kelas as $key = $value){
            $detail = [
                'id_mapel' => $value->id_mapel,
                'Nilai' => $value->Nilai,
                'Sakit' => $value->Sakit,
                'Izin' => $value->Izin,
                'Alpa' => $value->Alpa,,
                'NISN' => $NISN
            ];
        $this->db->insert("Transaksi_Detail_Kelas", $detail);
        }
        if($this->db->trans_status() == false){
            $this->db->trans_rollback();
            return false;
        }else{
            $this->db->trans_complete();
            return true;
        }
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Nilai_Mapel", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Nilai_Mapel");
        return $result;
    }
}