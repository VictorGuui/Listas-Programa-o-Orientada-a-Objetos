"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = require("../modelo/empresa");
var Cliente_1 = require("../negocio/Cliente");
var Produto_1 = require("../negocio/Produto");
var Listagem_1 = require("../negocio/Listagem");
var entrada_1 = require("../io/entrada");
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Clientes");
    console.log("2 - Produtos");
    console.log("3 - Listagens");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        // área de cliente
        case 1:
            var execucaoAreaCliente = true;
            while (execucaoAreaCliente) {
                console.log("\n1 - Cadastrar cliente");
                console.log("2 - Listar todos os clientes");
                console.log("3 - Alterar cliente");
                console.log("4 - Excluir cliente");
                console.log("0 - Voltar");
                var opcaoCliente = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
                switch (opcaoCliente) {
                    case 1:
                        var cadastroCliente = new Cliente_1.CadastrarCliente(empresa.getClientes, empresa.getProdutos);
                        cadastroCliente.cadastrar();
                        break;
                    case 2:
                        var listagemClientes = new Cliente_1.ListarClientes(empresa.getClientes);
                        listagemClientes.listar();
                        break;
                    case 3:
                        var alteracaoCliente = new Cliente_1.AlterarCliente(empresa.getClientes, empresa.getProdutos);
                        alteracaoCliente.alterar();
                        break;
                    case 4:
                        var exclusaoCliente = new Cliente_1.ExcluirCliente(empresa.getClientes);
                        exclusaoCliente.excluir();
                        break;
                    case 0:
                        execucaoAreaCliente = false;
                        console.log("\n");
                        break;
                    default:
                        console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(\n");
                        break;
                }
            }
            break;
        // área do produto
        case 2:
            var execucaoAreaProduto = true;
            while (execucaoAreaProduto) {
                console.log("\n1 - Cadastrar Produto");
                console.log("2 - Listar Produtos");
                console.log("3 - Alterar Produto");
                console.log("4 - Excluir Produto");
                console.log("0 - Sair");
                var opcaoProduto = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
                switch (opcaoProduto) {
                    case 1:
                        var cadastroProduto = new Produto_1.CadastrarProduto(empresa.getProdutos);
                        cadastroProduto.cadastrar();
                        break;
                    case 2:
                        var listagemProdutos = new Produto_1.ListarProdutos(empresa.getProdutos);
                        listagemProdutos.listar();
                        break;
                    case 3:
                        var alteracaoProduto = new Produto_1.AlterarProduto(empresa.getProdutos);
                        alteracaoProduto.alterar();
                        break;
                    case 4:
                        var exclusaoProduto = new Produto_1.ExcluirProduto(empresa.getProdutos);
                        exclusaoProduto.excluir();
                        break;
                    case 0:
                        execucaoAreaProduto = false;
                        console.log("\n");
                        break;
                    default:
                        console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(\n");
                        break;
                }
            }
            break;
        // Listagens
        case 3:
            var execucaoListagem = true;
            while (execucaoListagem) {
                console.log("\n1 - Listar os 10 clientes que mais consumiram produtos");
                console.log("2 - Clientes por g\u00EAnero");
                console.log("3 - Produto mais consumido");
                console.log("4 - Produto mais consumido por genero");
                console.log("0 - Sair");
                var opcaoProduto = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
                switch (opcaoProduto) {
                    case 1:
                        var listarClientesConsumidores = new Listagem_1.ListarClientesConsumidores(empresa.getClientes);
                        listarClientesConsumidores.listar();
                        break;
                    case 2:
                        var listarClientesporGenero = new Listagem_1.ListarClientesPorGenero(empresa.getClientes);
                        listarClientesporGenero.listar();
                        break;
                    case 3:
                        var listarProdutosMaisConsumidos = new Listagem_1.ListarProdutosMaisConsumidos(empresa.getClientes, empresa.getProdutos);
                        listarProdutosMaisConsumidos.listar();
                        break;
                    case 4:
                        var listarProdutosMaisConsumidosGenero = new Listagem_1.ListarProdutosMaisConsumidosGenero(empresa.getClientes, empresa.getProdutos);
                        listarProdutosMaisConsumidosGenero.listar();
                        break;
                    case 0:
                        execucaoListagem = false;
                        console.log("\n");
                        break;
                    default:
                        console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(\n");
                        break;
                }
            }
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
