/**
 * Created by Ricardo on 11/04/2016.
 */

/**
 * Retorna Data Atual formadata
 *
 * @returns {string}
 */
function dataAtual() {
    var hoje = new Date();
    var dd = hoje.getDate();
    var mm = hoje.getMonth()+1; //Janeiro é 0
    var yyyy = hoje.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    return dd+'-'+mm+'-'+yyyy;
}

$(document).ready(function (){

    // input principal de data do processo
    $('#form-mv-data').datepicker({
        format: 'dd-mm-yyyy'
    });
    $(this).val(dataAtual());
    $(this).mask("99-99-9999");
    // input Data de emissao de Nota Fiscal
    $('#form-mv-data-emissao').val(dataAtual());

    // filtro para campos numéricos de 1 - 10 dígitos
    /* var filtroNum = /[0-9]{1,10}/;
    // filtro para campos numéricos de 1 - 10 dígitos
    var filtroNome = /[\w]{3,100}/;

    // validação input de Código
    $("#form-mv-codigo").blur(function (){
        if(!filtroNum.test($(this).val())) {
            alert("Este campo requer valores numéricos.");
        }
    });
    // validação input de quantidade
    $("#form-mv-qtd").blur(function (){
        if(!filtroNum.test($(this).val())) {
            alert("Este campo requer valores numéricos.");
        }
    });
    // validação input de Total
    $("#form-mv-total").blur(function (){
        if(!filtroNum.test($(this).val())) {
            alert("Este campo requer valores numéricos.");
            $(this).val("");
        }
    });
    // validação input de nome do Cliente
    $("#form-mv-cliente").blur(function (){
        if(!filtroNome.test($(this).val())) {
            alert("Use caracteres alfanuméricos.");
            //$(this).val("");
        }
    }); */
    // validação input de CPF do Cliente
    $("#form-mv-cpf").mask("999.999.999-99");
    // validação input Valor Bruto
    $("#form-mv-valor-b").mask("99.999,99");
    // validação input Valor Líquido
    $("#form-mv-valor-l").mask("99.999,99");

});


/**
 * Realizar  exclusao do item
 *
 * @param id - Identificador do produto
 */
function c_excluirItemPedido(id) {
    bootbox.confirm("Deseja realmente excluir este item do pedido?", function(result) {
        if (result) {
            console.log("Produto { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Produto { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}