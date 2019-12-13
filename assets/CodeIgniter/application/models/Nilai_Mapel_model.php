<?php

class Nilai_Mapel_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `transaksi_detail_kelas`.*,
            `guru`.`Nama_Guru`,
            `tahun_ajaran`.`Tahun_Ajar`,
            `tahun_ajaran`.`Semester`,
            `kelas`.`Kelas`,
            `siswa`.`Nama_Siswa`,
            `mata_pelajaran`.`Mata_Pelajaran`,
            `nilai_mapel`.`Nilai`,
            `nilai_mapel`.`Sakit`,
            `nilai_mapel`.`Izin`,
            `nilai_mapel`.`Alpa`
          FROM
            `transaksi_detail_kelas`
            LEFT JOIN `transaksi_kelas` ON `transaksi_detail_kelas`.`id_trxkelas` = `transaksi_kelas`.`id_trxkelas`
            LEFT JOIN `tahun_ajaran` ON `transaksi_kelas`.`id_tahun` = `tahun_ajaran`.`id_tahun`
            LEFT JOIN `guru` ON `transaksi_kelas`.`id_guru` = `guru`.`id_guru`
            LEFT JOIN `kelas` ON `transaksi_kelas`.`id_kelas` = `kelas`.`id_kelas`
            LEFT JOIN `nilai_mapel` ON `transaksi_detail_kelas`.`NISN` = `nilai_mapel`.`NISN`
            LEFT JOIN `siswa` ON `siswa`.`NISN` = `nilai_mapel`.`NISN`
            LEFT JOIN `mata_pelajaran` ON `mata_pelajaran`.`id_mapel` = `nilai_mapel`.`id_mapel`
            "); 
        return $data->result_array();
    }
    public function Insert($data)
    {     
        $this->db->insert("Nilai_Mapel", $data);
        $result = $this->db->query(
            "SELECT
            `nilai_mapel`.*
            FROM
            `nilai_mapel`
            LEFT JOIN `mata_pelajaran` ON `nilai_mapel`.`id_mapel` = `mata_pelajaran`.`id_mapel`
            LEFT JOIN `siswa` ON `nilai_mapel`.`NISN` = `siswa`.`NISN`
            WHERE
            nilai_mapel.NISN = '$data->NISN'and
            nilai_mapel.id_mapel = '$data->id_mapel'and
            nilai_mapel.Nilai = '$data->Nilai'and
            nilai_mapel.Sakit = '$data->id_maSakitpel'and
            nilai_mapel.Izin = '$data->Izin'and
            nilai_mapel.Alpa = '$data->Alpa'
            ");
        return $result;

        // $result = $this->db->insert("Nilai_Mapel", $data);
        // return $result;

        // $this->db->trans_start();
        // $DataNilai_Mapel = [
        //     'NISN' =>$data->NISN,
        //     'id_mapel'=>$data->id_mapel,
        //     'Nilai' =>$data->Nilai,
        //     'Sakit' =>$data->Sakit,
        //     'Izin' =>$data->Izin,
        //     'Alpa' =>$data->Alpa
        //     ];
        // $this->db->insert('Nilai_Mapel', $DataNilai_Mapel);
        // $NISN = $this->db->insert_id();
        // foreach ($data->Transaksi_Detail_Kelas as $key = $value){
        //     $detail = [
        //         'NISN' => $value->NISN,
        //         'id_trxkelas' => $value->id_kelas
        //     ];
        // $this->db->insert("Transaksi_Detail_Kelas", $detail);
        // }
        // if($this->db->trans_status() == false){
        //     $this->db->trans_rollback();
        //     return false;
        // }else{
        //     $this->db->trans_complete();
        //     return true;
        // }
        // return $result;
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