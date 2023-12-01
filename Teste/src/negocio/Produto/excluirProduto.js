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
var ExcluirProduto = /** @class */ (function (_super) {
    __extends(ExcluirProduto, _super);
    function ExcluirProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirProduto.prototype.excluir = function () {
        console.log("\nExclus\u00E3o do Produto");
        console.table(this.produtos);
        var escolhaProduto = this.entrada.receberNumero("Escolha o produto para deletar pelo c\u00F3digo(index): ");
        this.produtos.splice(escolhaProduto, 1);
        console.log("\nExclus\u00E3o conclu\u00EDda :)\n");
    };
    return ExcluirProduto;
}(CRUD_1.Excluir));
exports.default = ExcluirProduto;
