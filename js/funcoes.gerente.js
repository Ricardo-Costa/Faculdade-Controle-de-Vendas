/**
 * Created by Ricardo on 05/04/2016.
 */

/**
 * Editar dados do usuário
 *
 * @param id - Identificador do usuário
 */
function editarUsuario(id) {

}

/**
 * Realizar POST via ajax com dados de usuário que
 * deverá ser excluido.
 *
 * @param id - Identificador do usuário
 */
function excluirUsuario(id) {
    bootbox.confirm("Deseja realmente excluir este usuário?", function(result) {
        if (result) {
            console.log("Usuario { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Usuario { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}

/**
 * Exibir relatório do usuário corespondente
 *
 * @param id - Identificador do usuário
 */
function relatorioUsuario(id) {
    var htmlRelatorio = '<div>' +
        '<p>Funcionário responsável pela gestão dos cadastros de produtos e ' +
        'fornecedores, e pela emissão e acompanhamento de pedidos de compra.</p>' +
        '<hr class="separador"/>' +
        '<table class="table">' +
        '<tbody>' +
        '<tr>' +
        '<th scope="row">Código</th><td>1503</td>' +
        '<th scope="row">Data de Cadastro</th><td>15/03/2014</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row">Nome</th><td>João da Silva</td>' +
        '<th scope="row">Tipo</th><td>Gestor de Compras</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row">E-mail</th><td>joao.silva@mail.com</td>' +
        '<th scope="row">Operações Efetivadas</th><td>501, 505, 500...</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row">Telefone</th><td>(085) 97856-1234</td>' +
        '<th scope="row">Operações Canceladas</th><td>503, 503, 502...</td>' +
        '</tr>' +
        '</tbody></table>' +
        '</div>';

    //bootbox.alert(htmlRelatorio);


    bootbox.dialog({
        title: "João Silva <small>(Gestor de Compras)</small>",
        message: htmlRelatorio,
        buttons: {
            print: {
                label: "<span class='glyphicon glyphicon-print'></span>",
                className: "btn-default",
                callback: function() {
                    console.log("Realizar operação de impressão...");
                }
            },
            main: {
                label: "OK",
                className: "btn-primary"
            }
        }
    });
    delete (htmlRelatorio);
}
