"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var CRUD_1 = require("../CRUD");
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.alterar = function () {
        console.log("\nAltera\u00E7\u00E3o do Produto");
        console.table(this.produtos);
        var escolhaProduto = this.entrada.receberNumero("Escolha o produto para alterar pelo c\u00F3digo(index): ");
        var produtoEscolhido = this.produtos[escolhaProduto];
        console.log('Campos:');
        console.log("1 - Nome: ".concat(produtoEscolhido.getNome));
        console.log("2 - Valor: ".concat(produtoEscolhido.getValor));
        var opcao = this.entrada.receberNumero("Por favor escolhe um campo para alterar: ");
        switch (opcao) {
            case 1:
                var novoNome = this.entrada.receberTexto('Novo nome: ');
                this.produtos[escolhaProduto].setNome = novoNome;
                break;
            case 2:
                var novoValor = this.entrada.receberNumero('Novo valor: ');
                this.produtos[escolhaProduto].setValor = novoValor;
                break;
            default:
                console.log('Este campo não existe');
                break;
        }
        console.log("Altera\u00E7\u00E3o conclu\u00EDda :)\n");
    };
    return CadastroProduto;
}(CRUD_1.Alterar));
exports.default = CadastroProduto;
