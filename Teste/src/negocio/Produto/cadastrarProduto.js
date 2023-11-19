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
var produto_1 = require("../../modelo/produto");
var CRUD_1 = require("../CRUD");
var CadastrarProduto = /** @class */ (function (_super) {
    __extends(CadastrarProduto, _super);
    function CadastrarProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do Produto");
        var nomeProduto = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var valor = this.entrada.receberNumero("Por favor informe o valor: ");
        var produto = new produto_1.default(nomeProduto, valor);
        this.produtos.push(produto);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastrarProduto;
}(CRUD_1.Cadastrar));
exports.default = CadastrarProduto;
