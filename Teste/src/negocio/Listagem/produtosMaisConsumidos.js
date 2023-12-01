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
var CRUD_1 = require("../CRUD");
var ListarProdutosMaisConsumidos = /** @class */ (function (_super) {
    __extends(ListarProdutosMaisConsumidos, _super);
    function ListarProdutosMaisConsumidos(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        return _this;
    }
    ListarProdutosMaisConsumidos.prototype.listar = function () {
        var _this = this;
        var produtosMaisConsumidos = [];
        this.produtos.forEach(function (_a, index) {
            var nomeProduto = _a.getNome;
            produtosMaisConsumidos.push({
                produto: nomeProduto,
                quantidade: 0
            });
            _this.clientes.forEach(function (_a) {
                var produtosConsumidos = _a.getProdutosConsumidos;
                var quantidadeProdutosConsumidos = produtosConsumidos.filter(function (_a) {
                    var nomeProdutoConsumido = _a.getNome;
                    return nomeProdutoConsumido === nomeProduto;
                }).length;
                produtosMaisConsumidos[index].quantidade += quantidadeProdutosConsumidos;
            });
        });
        console.log("\nProduto mais consumido:");
        console.table(produtosMaisConsumidos.sort(function (a, b) { return b.quantidade = a.quantidade; }).slice(0, 1));
        console.log("\n");
    };
    return ListarProdutosMaisConsumidos;
}(CRUD_1.Listar));
exports.default = ListarProdutosMaisConsumidos;
