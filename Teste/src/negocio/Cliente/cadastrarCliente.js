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
var cliente_1 = require("../../modelo/cliente");
var cpf_1 = require("../../modelo/cpf");
var rg_1 = require("../../modelo/rg");
var telefone_1 = require("../../modelo/telefone");
var CRUD_1 = require("../CRUD");
var CadastrarCliente = /** @class */ (function (_super) {
    __extends(CadastrarCliente, _super);
    function CadastrarCliente(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        _this.produtos = produtos;
        return _this;
    }
    CadastrarCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var genero = this.entrada.receberTexto("Informe seu g\u00EAnero (m/f): ");
        var valorCpf = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var dataCPF = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var _a = dataCPF.split('/'), date = _a[0], month = _a[1], year = _a[2];
        var dataEmissaoCPF = new Date(Number(year), Number(month), Number(date));
        var rgs = [];
        var maisRgs = true;
        while (maisRgs) {
            var valorRg = this.entrada.receberTexto("Por favor informe o n\u00FAmero do rg: ");
            var dataRg = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
            var _b = dataRg.split('/'), date_1 = _b[0], month_1 = _b[1], year_1 = _b[2];
            var dataEmissaoRG = new Date(Number(year_1), Number(month_1), Number(date_1));
            rgs.push(new rg_1.default(valorRg, dataEmissaoRG));
            maisRgs = this.entrada.receberTexto("Possu\u00ED mais RGs? (s/n) ") === 's' ? true : false;
        }
        var telefones = [];
        var maisTelefones = true;
        while (maisTelefones) {
            var valorTelefone = this.entrada.receberTexto("Por favor informe o telefone, no padr\u00E3o (99) 99999-9999: ");
            var _c = valorTelefone.split(' '), ddd = _c[0], numero = _c[1];
            telefones.push(new telefone_1.default(ddd, numero));
            maisTelefones = this.entrada.receberTexto("Possu\u00ED mais telefones? (s/n) ") === 's' ? true : false;
        }
        var cpf = new cpf_1.default(valorCpf, dataEmissaoCPF);
        var produtosConsumidos = [];
        var maisProdutos = true;
        var _loop_1 = function () {
            if (this_1.produtos.length === 0) {
                console.warn('\nNão há produtos cadastrados');
                console.log('Tente novamente mais tarde');
                return "break";
            }
            console.table(this_1.produtos);
            var codigoProdutoConsumido = this_1.entrada.receberNumero('Selecione o produto pelo código(index): ');
            var produtoConsumido = this_1.produtos.find(function (_, index) { return index === codigoProdutoConsumido; });
            if (produtoConsumido)
                produtosConsumidos.push(produtoConsumido);
            else {
                console.warn('Não há produto com esse código');
            }
            maisProdutos = this_1.entrada.receberTexto("Mais Produtos? (s/n) ") === 's' ? true : false;
        };
        var this_1 = this;
        while (maisProdutos) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, rgs, telefones, produtosConsumidos, genero);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastrarCliente;
}(CRUD_1.Cadastrar));
exports.default = CadastrarCliente;
