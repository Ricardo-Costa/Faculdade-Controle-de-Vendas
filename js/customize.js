$(document).ready(function () {

    // http://getbootstrap.com/javascript/#tooltips-examples
    // iniciando os componentes toggle's
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /*
     * Usando plugin "Masked Input"
     * https://github.com/digitalBush/jquery.maskedinput
     * */
    $("#form-cd-us-telefone").mask("(999) 99999-9999");

});
