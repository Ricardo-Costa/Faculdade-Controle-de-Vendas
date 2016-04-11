/**
 * Created by Ricardo on 11/04/2016.
 */
$(document).ready(function (){

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