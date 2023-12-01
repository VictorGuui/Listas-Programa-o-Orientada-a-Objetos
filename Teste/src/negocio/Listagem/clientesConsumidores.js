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
var ListarClientesConsumidores = /** @class */ (function (_super) {
    __extends(ListarClientesConsumidores, _super);
    function ListarClientesConsumidores(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListarClientesConsumidores.prototype.listar = function () {
        var consumoCliente = this.clientes.map(function (_a) {
            var nome = _a.nome, produtosConsumidos = _a.getProdutosConsumidos;
            return ({
                nome: nome,
                quantidadeConsumo: produtosConsumidos.length
            });
        });
        var consumoClienteOrdenado = consumoCliente.sort(function (a, b) { return b.quantidadeConsumo - a.quantidadeConsumo; });
        console.log("\nLista dos 10 clientes que mais consumiram:");
        console.table(consumoClienteOrdenado.slice(0, 10));
        console.log("\n");
    };
    return ListarClientesConsumidores;
}(CRUD_1.Listar));
exports.default = ListarClientesConsumidores;
