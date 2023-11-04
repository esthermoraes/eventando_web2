<?php
	require_once('connect_mobile.php');
    require_once('autenticacao.php');
    
    // array de resposta
    $resposta = array();

    // verifica se o usuário conseguiu autenticar
    if (autenticar($db_con)) {
        if (isset($_POST['atracoes_evento']) && isset($_POST['tipo_contato_evento']) && isset($_POST['contato_evento'])){

        }
        else {
            $resposta["sucesso"] = 0;
            $resposta["erro"] = "Campos requeridos não preenchidos";
        }
    } 
    else {
        $resposta["sucesso"] = 0;
        $resposta["erro"] = "Email ou senha não conferem";
    }

    // Fecha a conexao com o BD
    $db_con = null;

    // Converte a resposta para o formato JSON.
    echo json_encode($resposta);

?>