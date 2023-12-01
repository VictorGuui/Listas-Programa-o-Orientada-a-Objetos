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
var ListarClientes = /** @class */ (function (_super) {
    __extends(ListarClientes, _super);
    function ListarClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListarClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
            console.log("Nome social: ".concat(cliente.nomeSocial));
            console.log("Genero: ".concat(cliente.genero));
            console.log('CPF:');
            console.table([cliente.getCpf]);
            console.log('RGs:');
            console.table(cliente.getRgs);
            console.log('Telefones:');
            console.table(cliente.getTelefones);
            console.log('Produtos Consumidos');
            console.table(cliente.getProdutosConsumidos);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListarClientes;
}(CRUD_1.Listar));
exports.default = ListarClientes;
