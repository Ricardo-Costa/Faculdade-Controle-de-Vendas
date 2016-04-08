/**
 * Created by Ricardo on 07/04/2016.
 */

/**
 * Editar dados do Produto
 *
 * @param id - Identificador do produto(veículo)
 */
function editarProduto(id) {
    var htmlFomulario =
        '<p>Alterar dados deste produto.</p><br/>' +
        '<form id="form-alt-pd" class="form-horizontal" data-toggle="validator" role="form">' +
        '<div class="form-group">' +
        '<label for="form-alt-pd-tipo" class="control-label col-sm-3"> Tipo </label>' +
        '<div class="col-sm-7">' +
        '<select id="form-alt-pd-tipo" name="tipo" class="form-control" required="required">' +
        '<option value="1">Caixeiro</option>' +
        '<option selected="selected" value="2">Gestor de Compras</option>' +
        '<option value="3">Gestor de Estoque</option>' +
        '<option value="4">Gerente</option>' +
        '</select>' +
        '<small class="descricao">Selecione o perfil de usuário.</small>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-pd-nome"> Nome </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-pd-nome" class="form-control" name="nome" data-minlength="3" data-error="Mínimo 3 e máximo 20 caracteres alfanuméricos" maxlength="20" placeholder="Nome de Usuário" required pattern="[A-Za-zÀ-ú, -,Ã,ã,Õ,õ,ç,Ç]{3,20}" title="Mínimo 3 e máximo 20 caracteres alfanuméricos" value="João da Silva"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-pd-email"> E-mail </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-pd-email" class="form-control" type="email" name="email" placeholder="Email do usuário" required="required" value="joao.silva@mail.com"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-pd-telefone"> Telefone </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-pd-telefone" class="form-control" name="telefone" placeholder="Telefone" required="required" value="085986741234"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div></div></div>' +
        '</form>';

    bootbox.dialog({
        title: "João Silva <small>(Gestor de Compras)</small>",
        message: htmlFomulario,
        buttons: {
            cancel: {
                label: "Cancelar",
                className: "btn-default",
                callback: function() {
                    console.log("As alteracoes para este usuario forao canceladas");
                }
            },
            main: {
                label: "Atualizar",
                className: "btn-primary",
                callback: function() {
                    console.log("Novos dados deverao ser setados");
                }
            }
        }
    });

    // aplicar máscara
    $("#form-alt-pd-telefone").mask("(999) 99999-9999");

    delete (htmlFomulario);
}

/**
 * Realizar POST via ajax com dados do produto que
 * deverá ser excluido.
 *
 * @param id - Identificador do produto
 */
function excluirProduto(id) {
    bootbox.confirm("Deseja realmente excluir o registro deste produto?", function(result) {
        if (result) {
            console.log("Produto { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Produto { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}

/**
 * Exibir relatório do produto corespondente
 *
 * @param id - Identificador do produto
 */
function relatorioProduto(id) {
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
