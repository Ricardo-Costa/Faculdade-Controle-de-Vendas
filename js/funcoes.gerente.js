/**
 * Created by Ricardo on 05/04/2016.
 */

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
function exibirRelatorio(id) {
    var htmlRelatorio = '';

    bootbox.alert(htmlRelatorio);
    delete (htmlRelatorio);
}
