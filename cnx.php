<?php

class ConexaoBD {
    public function conectarbanco(){
        $conexao = new PDO("mysql:host=localhost;dbname=Bot_telegram","root","");
        return $conexao;
        
    }
    public function inserirdados($updateid,$comando,$resposta){
        $sql = "insert into tbbotresposta(update_id,comando,resposta) values (?,?,?)";
        
        $prepararcomando = self::conectarbanco()->prepare($sql);
         $prepararcomando->bindParam(1, $updateid);
         $prepararcomando->bindParam(2, $comando);
         $prepararcomando->bindParam(3, $resposta);
         
         $prepararcomando->execute();
    }
}
