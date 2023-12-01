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
var ExcluirCliente = /** @class */ (function (_super) {
    __extends(ExcluirCliente, _super);
    function ExcluirCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirCliente.prototype.excluir = function () {
        console.log("\nExclus\u00E3o do Cliente");
        console.table(this.clientes.map(function (_a) {
            var nome = _a.nome;
            return nome;
        }));
        var escolhaCliente = this.entrada.receberNumero("Escolha o cliente para deletar pelo c\u00F3digo(index): ");
        this.clientes.splice(escolhaCliente, 1);
        console.log("\nExclus\u00E3o conclu\u00EDda :)\n");
    };
    return ExcluirCliente;
}(CRUD_1.Excluir));
exports.default = ExcluirCliente;
