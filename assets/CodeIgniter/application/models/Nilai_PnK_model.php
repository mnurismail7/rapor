<?php

class Nilai_Pnk_Model extends CI_Model
{
    public function Get() 
    {
        $data = $this->db->query(
            "SELECT
            `siswa`.`Nama_Siswa`,
            `siswa`.`NISN`,
            `perilaku_dan_kepribadian`.`Kategori`,
            `nilai_pnk`.`Keterangan`
          FROM
            `siswa`
            RIGHT JOIN `nilai_pnk` ON `nilai_pnk`.`NISN` = `siswa`.`NISN`
            LEFT JOIN `perilaku_dan_kepribadian` ON `perilaku_dan_kepribadian`.`id_pnk` =
              `nilai_pnk`.`id_pnk`
            ");
        return $data->result_array();
    }
    public function Insert($data)
    {
        $result = $this->db->insert("Nilai_Pnk", $data);
        return $result;
    }
    public function Update($data)
    {
        $this->db->where("NISN", $data->NISN);
        $result = $this->db->update("Nilai_Pnk", $data);
        return $result;
    }
    public function Delete($NISN)
    {
        $this->db->where("NISN", $NISN['NISN']);
        $result = $this->db->delete("Nilai_Pnk");
        return $result;
    }
}