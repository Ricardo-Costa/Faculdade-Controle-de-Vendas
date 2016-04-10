/** Definições de Perfil de Usuários */
const
    CAIXEIRO = 1,
    GESTOR_DE_COMPRAS = 2,
    GESTOR_DE_ESTOQUE = 3,
    GERENTE = 4;

// formar string de verificação do cookie de sessao
function formatStringCookie(tipo) {
    return "perfil="+tipo;
}

$(document).ready(function () {

    // TODO - verificar string de cookie
    // verificar se existe usuário logado e qual o tipo de usuário
    var cookiePerfil = document.cookie;
    if (cookiePerfil) {
        var menu_usuario_tipo = $("#menu-usuario-tipo");
        if (cookiePerfil == formatStringCookie(CAIXEIRO)) {
            menu_usuario_tipo.html("(Caixeiro)");
            // alert("Caixeiro logado...");
        }
        else if (cookiePerfil == formatStringCookie(GESTOR_DE_COMPRAS)) {
            menu_usuario_tipo.html("(Gestor de Compras)");
            // alert("Gestor de Compras logado...");
        }
        else if (cookiePerfil == formatStringCookie(GESTOR_DE_ESTOQUE)) {
            menu_usuario_tipo.html("(Gestor de Estoque)");
            // alert("Gestor de Estoque logado...");
        }
        else {
            // gerente
            menu_usuario_tipo.html("(Gerente)");
            // alert("Gerente logado...");
        }
    }
    delete (cookiePerfil);

    // funcionalidade de busca nos paineis
    $('.input-system-search').keyup(function () {
        // especificar qual a tabela que deve ser utilizada no contexto da função
        var tableTargetSearch = $(this).attr("data-tb-target");
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('#' + tableTargetSearch + ' tbody');
        var tableRowsClass = $('#' + tableTargetSearch + ' tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '') {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Pesquisar por: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1) {
                //hide rows
                tableRowsClass.eq(i).hide();

            } else {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0) {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nada encontrado.</td></tr>');
        }

    });

    // http://getbootstrap.com/javascript/#tooltips-examples
    // iniciando os componentes toggle's
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});
