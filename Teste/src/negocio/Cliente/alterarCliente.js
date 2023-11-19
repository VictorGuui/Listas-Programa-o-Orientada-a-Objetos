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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var cpf_1 = require("../../modelo/cpf");
var CRUD_1 = require("../CRUD");
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        _this.produtos = produtos;
        return _this;
    }
    CadastroProduto.prototype.alterar = function () {
        console.log("\nAltera\u00E7\u00E3o do Cliente");
        console.table(this.clientes.map(function (_a) {
            var nome = _a.nome;
            return nome;
        }));
        var escolhaCliente = this.entrada.receberNumero("Escolha o cliente para alterar pelo c\u00F3digo(index): ");
        var clienteEscolhido = this.clientes[escolhaCliente];
        console.log('Campos:');
        console.log("1 - Nome: ".concat(clienteEscolhido.nome));
        console.log("2 - Nome Social: ".concat(clienteEscolhido.nomeSocial));
        console.log("3 - G\u00EAnero");
        console.log('4 - CPF');
        console.table([clienteEscolhido.getCpf]);
        console.log("5 - RGs:");
        console.table(clienteEscolhido.getRgs);
        console.log("6 - Telefones:");
        console.table(clienteEscolhido.getTelefones);
        console.log("7 - Produtos Consumidos:");
        console.table(clienteEscolhido.getProdutosConsumidos);
        var opcao = this.entrada.receberNumero("Por favor escolhe um campo para alterar: ");
        switch (opcao) {
            case 1:
                var novoNome = this.entrada.receberTexto('Novo nome: ');
                this.clientes[escolhaCliente].nome = novoNome;
                break;
            case 2:
                var novoNomeSocial = this.entrada.receberTexto('Novo nome Social: ');
                this.clientes[escolhaCliente].nomeSocial = novoNomeSocial;
                break;
            case 3:
                var novoGenero = this.entrada.receberTexto('Novo genero (m/f): ');
                this.clientes[escolhaCliente].setGenero = novoGenero;
                break;
            case 4:
                console.log("1 - Valor ".concat(clienteEscolhido.getCpf.getValor));
                console.log("2 - Data Emiss\u00E3o ".concat(clienteEscolhido.getCpf.getDataEmissao));
                var opcaoCpf = this.entrada.receberNumero('Deseja alterar qual campo do CPF? ');
                switch (opcaoCpf) {
                    case 1:
                        var novoValorCpf = this.entrada.receberTexto('Novo Valor: ');
                        this.clientes[escolhaCliente].setCpf = new cpf_1.default(novoValorCpf, clienteEscolhido.getCpf.getDataEmissao);
                        break;
                    case 2:
                        var novoDataEmissaoCpf = this.entrada.receberTexto('Nova data de emissão do cpf, no padrão dd/mm/yyyy: : ');
                        var _a = novoDataEmissaoCpf.split('/'), date = _a[0], month = _a[1], year = _a[2];
                        var dataEmissaoCPF = new Date(Number(year), Number(month), Number(date));
                        this.clientes[escolhaCliente].setCpf = new cpf_1.default(clienteEscolhido.getCpf.getValor, dataEmissaoCPF);
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                console.table(clienteEscolhido.getRgs);
                var escolhaRg = this.entrada.receberNumero("Escolha o RG para alterar pelo c\u00F3digo(index): ");
                var rgEscolhido = clienteEscolhido.getRgs[escolhaRg];
                console.log("1 - Valor ".concat(rgEscolhido.getValor));
                console.log("2 - Data Emiss\u00E3o ".concat(rgEscolhido.getDataEmissao));
                var opcaoCampoRg = this.entrada.receberNumero('Deseja alterar qual campo do RG escolhido? ');
                switch (opcaoCampoRg) {
                    case 1:
                        var novoValorRg = this.entrada.receberTexto('Novo Valor: ');
                        var rgs = clienteEscolhido.getRgs;
                        rgs[escolhaRg].setValor = novoValorRg;
                        this.clientes[escolhaCliente].setRgs = rgs;
                        break;
                    case 2:
                        var novoDataEmissaoRG = this.entrada.receberTexto('Nova data de emissão do cpf, no padrão dd/mm/yyyy: : ');
                        var _b = novoDataEmissaoRG.split('/'), date = _b[0], month = _b[1], year = _b[2];
                        var dataEmissaoRG = new Date(Number(year), Number(month), Number(date));
                        var rgs2 = clienteEscolhido.getRgs;
                        rgs2[escolhaRg].setDataEmissao = dataEmissaoRG;
                        this.clientes[escolhaCliente].setRgs = rgs2;
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                console.table(clienteEscolhido.getTelefones);
                var escolhaTelefone = this.entrada.receberNumero("Escolha o telefone para alterar pelo c\u00F3digo(index): ");
                var novoTelefone = this.entrada.receberTexto('Novo Telefone (99) 9999-99999: ');
                var telefoneEscolhido = clienteEscolhido.getTelefones[escolhaTelefone];
                var _c = novoTelefone.split(' '), ddd = _c[0], numero = _c[1];
                var telefones = clienteEscolhido.getTelefones;
                telefones[escolhaTelefone].setDdd = ddd;
                telefones[escolhaTelefone].setNumero = numero;
                this.clientes[escolhaCliente].setTelefones = telefones;
                break;
            case 7:
                console.log('1 - Adicionar');
                console.log('2 - Remover');
                var operacaoProduto = this.entrada.receberNumero('O que deseja fazer com o produto:');
                switch (operacaoProduto) {
                    case 1:
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
                        this.clientes[escolhaCliente].setProdutosConsumidos = __spreadArray(__spreadArray([], this.clientes[escolhaCliente].getProdutosConsumidos, true), produtosConsumidos, true);
                        break;
                    case 2:
                        console.table(clienteEscolhido.getProdutosConsumidos);
                        var escolhaProduto = this.entrada.receberNumero("Escolha o produto pelo c\u00F3digo(index) dos produtos consumidos: ");
                        var produtos = clienteEscolhido.getProdutosConsumidos;
                        produtos.splice(escolhaProduto, 1);
                        this.clientes[escolhaCliente].setProdutosConsumidos = produtos;
                        break;
                    default:
                        break;
                }
                break;
        }
        console.log("\nAltera\u00E7\u00E3o conclu\u00EDda :)\n");
    };
    return CadastroProduto;
}(CRUD_1.Alterar));
exports.default = CadastroProduto;
