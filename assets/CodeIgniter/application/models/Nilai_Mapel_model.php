<?php

class Nilai_Mapel_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `siswa`.`Nama_Siswa`,
            `siswa`.`NISN`,
            `mata_pelajaran`.`Mata_Pelajaran`,
            `nilai_mapel`.`Nilai`,
            `nilai_mapel`.`Sakit`,
            `nilai_mapel`.`Izin`,
            `nilai_mapel`.`Alpa`
          FROM
            `mata_pelajaran`
            RIGHT JOIN `nilai_mapel` ON `mata_pelajaran`.`id_mapel` =
              `nilai_mapel`.`id_mapel`
            LEFT JOIN `siswa` ON `siswa`.`NISN` = `nilai_mapel`.`NISN`
            "); 
        return $data->result_array();
    }
    public function Insert($data)
    {
        $this->db->trans_start();     
        foreach ($data->Mapel as $key => $value) {
            $DataNilai_Mapel = [
            'NISN' =>$data->NISN,
            'id_mapel'=>$value->id_mapel,
            'Nilai' =>$value->Nilai,
            'Sakit' =>$value->Sakit,
            'Izin' =>$value->Izin,
            'Alpa' =>$value->Alpa
            ];
            $this->db->Insert("Nilai_Mapel", $DataNilai_Mapel);
        }
        foreach ($data->Ekskul as $key => $value) {
            $Data_NIlai_Ekskul = [
                'NISN' =>$data->NISN,
                'id_ekskul'=>$value->id_ekskul,
                'Keterangan' =>$value->Keterangan
            ];
            $this->db->Insert("Nilai_Ekskul", $Data_NIlai_Ekskul);
        }
        foreach ($data->Pnk as $key => $value) {
            $DataNilai_PnK = [
                'NISN' =>$data->NISN,
                'id_pnk'=>$value->id_pnk,
                'Keterangan' =>$value->Keterangan
            ];
            $this->db->Insert("Nilai_PnK", $DataNilai_PnK);
        }
        if($this->db->trans_status()==false){
            $this->db->trans_rollback();
            return false;
        }else{
            $this->db->trans_complete();;
            return true;
        }
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