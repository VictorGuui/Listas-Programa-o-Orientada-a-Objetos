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
var ListarClientesPorGenero = /** @class */ (function (_super) {
    __extends(ListarClientesPorGenero, _super);
    function ListarClientesPorGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListarClientesPorGenero.prototype.listar = function () {
        var clientesPorGenero = this.clientes.map(function (_a) {
            var nome = _a.nome, genero = _a.genero;
            return ({
                masculino: genero === 'm' ? nome : '-',
                feminino: genero === 'f' ? nome : '-'
            });
        });
        console.log("\nClientes por g\u00EAnero:");
        console.table(clientesPorGenero);
        console.log("\n");
    };
    return ListarClientesPorGenero;
}(CRUD_1.Listar));
exports.default = ListarClientesPorGenero;
