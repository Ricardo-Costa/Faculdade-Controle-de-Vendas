/** Definições de Perfil de Usuários */
const
    CAIXEIRO = 1,
    GESTOR_DE_COMPRAS = 2,
    GESTOR_DE_ESTOQUE = 3,
    GERENTE = 4;
// array com "classes" do menu de paineis de funcionalidades dos usuários
var menuClasses = [
    "menu-painel-caixeiro",
    "menu-painel-gestor-de-compras",
    "menu-painel-gestor-de-estoque",
    "menu-painel-gerente",
];

// formar string de verificação do cookie de sessao
function formatStringCookie(tipo) {
    return "perfil="+tipo;
}

/**
 * Exibe Links de menu baseando-se no Usuário "logado"
 *
 * @param usuarioValor - Valor de Constante definido para o Usuário
 */
function exibirMenu(usuarioValor) {
    for (var i = 0; i < menuClasses.length; i++) {
        if ((i + 1) == usuarioValor) {
            $("." + menuClasses[i]).show();
            console.log('exibir classe .' + menuClasses[i]);
        } else {
            $("." + menuClasses[i]).hide();
            console.log('ocultar classe .' + menuClasses[i]);
        }
    }
}

$(document).ready(function () {

    $('#form-mv-data').datepicker({
        format: 'dd-mm-yyyy'
    });

    // TODO - verificar string de cookie
    // verificar se existe usuário logado e qual o tipo de usuário
    var cookiePerfil = document.cookie;
    if (cookiePerfil) {
        // componente de exibição do sistema
        var menu_usuario_tipo = $("#menu-usuario-tipo");

        if (cookiePerfil == formatStringCookie(CAIXEIRO)) {
            menu_usuario_tipo.html("(Caixeiro)");
            exibirMenu(CAIXEIRO);
        }
        else if (cookiePerfil == formatStringCookie(GESTOR_DE_COMPRAS)) {
            menu_usuario_tipo.html("(Gestor de Compras)");
            exibirMenu(GESTOR_DE_COMPRAS);
        }
        else if (cookiePerfil == formatStringCookie(GESTOR_DE_ESTOQUE)) {
            menu_usuario_tipo.html("(Gestor de Estoque)");
            exibirMenu(GESTOR_DE_ESTOQUE);
        }
        else {
            // gerente
            menu_usuario_tipo.html("(Gerente)");
            exibirMenu(GERENTE);
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
