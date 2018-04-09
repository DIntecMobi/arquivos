//------------------------------------------------------------------------------
//Abre a consulta e os dados co cliente
//------------------------------------------------------------------------------
function detalhesCliente(btn){
  var btn = btn.value;
  var cd_cli = $("#cd_cliente").val();
  //Lista os dados do cliente
  if(btn == 'dados_cliente'){
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli,
      url: 'paginas/cliente/detalhes/dados.php',
      success: function (data) {
        $('.detalhesCliente').html(data);
      }
    });
  }
  // Produtos do cliente
  if(btn == 'prod_cliente'){
    var tipo = "PRODUTOS";
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&tipo='+tipo,
      url: 'paginas/cliente/detalhes/consulta.php',
      success: function (data) {
        $('.detalhesCliente').html(data);
      }
    });
  }
  //Contas do cliente
  if(btn == 'pags_cliente'){
    var tipo = "PAGAMENTOS";
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&tipo='+tipo,
      url: 'paginas/cliente/detalhes/consulta.php',
      success: function (data) {
        $('.detalhesCliente').html(data);
      }
    });
  }
  // Notas do cliente
  if(btn == 'nfe_cliente'){
    var tipo = "NOTAS";
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&tipo='+tipo,
      url: 'paginas/cliente/detalhes/consulta.php',
      success: function (data) {
        $('.detalhesCliente').html(data);
      }
    });
  }
  return false;
}
//------------------------------------------------------------------------------
//Mostra o retorno da consulta (Pagamentos, notas, produtos....)
//------------------------------------------------------------------------------
function consDetalhescli(){
  var cd_cli = $("#cd_cliente").val();
  var tipo = $("#tipo_cli").val();
  var dt_inicial = $("#dt_inicial").val();
  var dt_final = $("#dt_final").val();

  //Mostra os produtos
  if(tipo == "PRODUTOS"){
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&dt_inicial='+dt_inicial+'&dt_final='+dt_final,
      url: 'paginas/cliente/detalhes/produtos.php',
      success: function (data) {
        $('.retorno_detalhes_cliente').html(data);
      }
    });
  }
  //Mostra Pagamentos
  if(tipo == "PAGAMENTOS"){
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&dt_inicial='+dt_inicial+'&dt_final='+dt_final,
      url: 'paginas/cliente/detalhes/consulta_pagamentos.php',
      success: function (data) {
        $('.retorno_detalhes_cliente').html(data);
      }
    });
  }
  //Mostra as Notas
  if(tipo == "NOTAS"){
    $.ajax({
      type: 'POST',
      data: 'codcli='+cd_cli+'&dt_inicial='+dt_inicial+'&dt_final='+dt_final,
      url: 'paginas/cliente/detalhes/notas.php',
      success: function (data) {
        $('.retorno_detalhes_cliente').html(data);
      }
    });
  }
  return false;
}
//------------------------------------------------------------------------------
//Pega a situação selecionada e mostra os pagamentos do cliente
//------------------------------------------------------------------------------
function consPagmcli(){
  var situacao = $("#situacao").val();
  var cd_cli = $("#cd_cliente").val();
  var dt_inicial = $("#dt_inicial").val();
  var dt_final = $("#dt_final").val();
  $.ajax({
    type: 'POST',
    data: 'codcli='+cd_cli+'&situacao='+situacao+'&dt_inicial='+dt_inicial+'&dt_final='+dt_final,
    url: 'paginas/cliente/detalhes/mostra_pagamentos.php',
    success: function (data) {
      $('.retorno_pagamentos_cliente').html(data);
    }
  });
}
//------------------------------------------------------------------------------
//Abre o modal e mostra a venda
//------------------------------------------------------------------------------
function abreModalVenda(){
  var nf = $("#venda").val();
  $.ajax({
    type: 'POST',
    data: 'nf='+nf,
    url: 'auxiliares/z-aux_mostra_venda.php',
    success: function (data) {
      $('.modal_venda').html(data);
      $('#myModal').modal('show');
    }
  });
}
