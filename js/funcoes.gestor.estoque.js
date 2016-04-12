/**
 * Created by Ricardo on 12/04/2016.
 */

/**
 * Editar dados do Produto
 *
 * @param id - Identificador do produto(veículo)
 */
function editarProduto(id) {
    var htmlFomulario =
        '<p>Alterar dados deste produto.</p><br/>' +
        '<form id="form-cd-pd" class="form-horizontal" data-toggle="validator" role="form">' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-cd-pd-fornecedor"> Fornecedor </label>' +
        '<div class="col-sm-7">' +
        '<select id="form-cd-pd-fornecedor" name="fornecedor" class="form-control" required="required">' +
        '<option value="1">XYZ Ltda</option>' +
        '<option selected value="2">ZZZ LTDA</option>' +
        '<option value="3">YYY LTDA</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="form-cd-pd-marca" class="control-label col-sm-3"> Marca </label>' +
        '<div class="col-sm-7">' +
        '<select id="form-cd-pd-marca" name="marca" class="form-control" required="required">' +
        '<option value="1">Fiat</option>' +
        '<option selected value="2">Volkswagem</option>' +
        '<option value="3">Renault</option>' +
        '<option value="4">Toyota</option>' +
        '</select>' +
        '<small class="descricao">Selecione o perfil de usuário a ser cadastrado.</small>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-cd-pd-modelo"> Modelo </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-cd-pd-modelo" class="form-control" name="modelo" value="Gol" data-minlength="2" data-error="Mínimo 2 e máximo 50 caracteres alfanuméricos incluindo _ e -." maxlength="50" placeholder="Modelo do veículo" required pattern="[A-Za-z0-9_-]{2,50}" title="Mínimo 2 e máximo 50 caracteres alfanuméricos incluindo _ e -." />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-cd-pd-fabricacao"> Ano Fabricação </label>' +
        '<div class="col-sm-3">' +
        '<input id="form-cd-pd-fabricacao" class="form-control" name="fabricacao" data-minlength="4" maxlength="4" value="2016" placeholder="Exemplo: 2016" required pattern="[0-9]{4}" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '<label class="control-label col-sm-1" for="form-cd-pd-versao"> Versão </label>' +
        '<div class="col-sm-3">' +
        '<input id="form-cd-pd-versao" class="form-control" name="versao" value="1.0" data-minlength="3" maxlength="3" placeholder="Exemplo: 1.0" required pattern="[0-9].[0-9]" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-cd-pd-cor"> Cor </label>' +
        '<div class="col-sm-7">' +
        '<select id="form-cd-pd-cor" name="cor" class="form-control" required="required">' +
        '<option value="1">Branco</option>' +
        '<option selected value="2">Prata</option>' +
        '<option value="3">Preto</option>' +
        '<option value="4">Vermelho</option>' +
        '</select>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-7">' +
        '<input type="submit" class="form-control btn-default" value="Atualizar"/>' +
        '</div>' +
        '</div>' +
        '</form>';

    bootbox.dialog({
        title: "João Silva <small>(Gestor de Compras)</small>",
        message: htmlFomulario
    });

    // máscara do input de telefone
    $("#form-cd-pd-versao").mask("9.9");

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