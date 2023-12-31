import chalk from "chalk";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProdutos from "../negocio/atualizarProduto";
import AtualizarServicos from "../negocio/atualizarServicos";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumoCliente from "../negocio/CadastroConsumoCliente";
import CadastroProdutos from "../negocio/CadastroProdutos";
import CadastroServicos from "../negocio/CadastroServicos";
import ExcluirCliente from "../negocio/deletarCliente";
import ExcluirProduto from "../negocio/deletarProduto";
import ExcluirServico from "../negocio/deletarServico";
import ListagemComusumoGen from "../negocio/listagem/ListagemComusumoGen";
import ListagemConsumoMais from "../negocio/listagem/ListagemConsumoMais";
import ListagemConsumoMenos from "../negocio/listagem/ListagemConsumoMenos";
import ListagemComusumoValor from "../negocio/listagem/ListagemConsumoValor";
import ListagemGenero from "../negocio/listagem/ListagemGenero";
import ListagemProdutosOuServicosMais from "../negocio/listagem/ListagemProdutosOuServicosMais";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/ListagemProdutos";
import ListagemServicos from "../negocio/ListagemServicos";

console.log(chalk.greenBright(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`))
let empresa = new Empresa()

let cli1 = new Cliente('Victor', 'Vituu', new CPF('45454545454',new Date(12,12,1221)), 'Masculino')
let cli2 = new Cliente('Ana', 'Gata', new CPF('89421565454',new Date(12,12,1221)), 'Feminino')
let cli3 = new Cliente('Luiz', 'LULU <3', new CPF('49478542453',new Date(12,12,1221)), 'Masculino')
let cli4 = new Cliente('Belinha', 'Bela', new CPF('73454542354',new Date(12,12,1221)), 'Feminino')
let cli5 = new Cliente('Vasco', 'Gigante', new CPF('28426645454',new Date(12,12,1221)), 'Masculino')
let cli6 = new Cliente('Pedro', 'Pussy', new CPF('39454475554',new Date(12,12,1221)), 'Masculino')
let cli7 = new Cliente('Hugo', 'Hugas', new CPF('14454877456',new Date(12,12,1221)), 'Masculino')
let cli8 = new Cliente('Ulquiora', 'Ciffer', new CPF('52452245451',new Date(12,12,1221)), 'Feminino')
let cli9 = new Cliente('Ichigo', 'Ichigo', new CPF('11454445458',new Date(12,12,1221)), 'Masculino')
let cli10 = new Cliente('Naruto', 'Naruto', new CPF('31454745895',new Date(12,12,1221)), 'Masculino')
let cli11 = new Cliente('Dalva', 'Mae', new CPF('56554745895',new Date(12,12,1221)), 'Feminino')
cli1.addRg(new RG('58951348',new Date(20,12,2000)))
cli2.addRg(new RG('89522146',new Date(20,12,2000)))
cli3.addRg(new RG('77572727',new Date(20,12,2000)))
cli4.addRg(new RG('53475527',new Date(20,12,2000)))
cli5.addRg(new RG('71466984',new Date(20,12,2000)))
cli6.addRg(new RG('39845464',new Date(20,12,2000)))
cli7.addRg(new RG('87214654',new Date(20,12,2000)))
cli8.addRg(new RG('44874668',new Date(20,12,2000)))
cli9.addRg(new RG('52115576',new Date(20,12,2000)))
cli10.addRg(new RG('47115597',new Date(20,12,2000)))
cli11.addRg(new RG('88715597',new Date(20,12,2000)))

empresa.getClientes.push(cli1)
empresa.getClientes.push(cli2)
empresa.getClientes.push(cli3)
empresa.getClientes.push(cli4)
empresa.getClientes.push(cli5)
empresa.getClientes.push(cli6)
empresa.getClientes.push(cli7)
empresa.getClientes.push(cli8)
empresa.getClientes.push(cli9)
empresa.getClientes.push(cli10)
empresa.getClientes.push(cli11)

let servico1 = new Servico("Corte", 24)
let servico2 = new Servico("Remoção de rugas", 12)
let servico3 = new Servico("Remoção  de manchas na pele", 34)
let servico4 = new Servico("Massagem relaxante", 45)
let servico5 = new Servico("Tratamento capilar", 30)
let servico6 = new Servico("Pedicure e Manicure", 40)

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)

let produto1 = new Produto("Pomada",12)
let produto2 = new Produto("Condicionador",20)
let produto3 = new Produto("Creme", 15)
let produto4 = new Produto("Sabonete Esfoliante", 8)
let produto5 = new Produto("Óleo Corporal", 18)
let produto6 = new Produto("Máscara Facial", 25)

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)

cli1.addProduto(produto1)
cli2.addProduto(produto2)
cli3.addProduto(produto3)
cli4.addProduto(produto4)
cli5.addProduto(produto5)
cli6.addProduto(produto6)
cli7.addProduto(produto3)
cli8.addProduto(produto6)
cli9.addProduto(produto1)
cli9.addProduto(produto3)
cli11.addProduto(produto2)

cli1.addServico(servico1)
cli2.addServico(servico2)
cli3.addServico(servico6)
cli4.addServico(servico2)
cli5.addServico(servico5)
cli6.addServico(servico3)
cli7.addServico(servico4)
cli8.addServico(servico5)
cli9.addServico(servico1)
cli11.addServico(servico1)

let execucao = true

while (execucao) {
    console.log(chalk.blackBright(`Opções:`));
    console.log(chalk.blueBright(`1 - Cadastrar cliente`));
    console.log(chalk.blueBright(`2 - Listar todos os clientes`));
    console.log(chalk.blueBright(`3 - Atualizar clientes`));
    console.log(chalk.blueBright(`4 - Excluir clientes`));
    console.log(chalk.blueBright(`5 - Cadastrar Produto`));
    console.log(chalk.blueBright(`6 - Listar todos os produtos`));
    console.log(chalk.blueBright(`7 - Atualizar produtos`));
    console.log(chalk.blueBright(`8 - Excluir produtos`));
    console.log(chalk.blueBright(`9 - Cadastrar Serviços`));
    console.log(chalk.blueBright(`10 - Listar todos os Serviços`));
    console.log(chalk.blueBright(`11 - Atualizar serviços`));
    console.log(chalk.blueBright(`12 - Excluir serviços`));
    console.log(chalk.blueBright(`13 - Listagem por gênero`));
    console.log(chalk.blueBright(`14 - Cadastrar consumo de produtos ou serviço para o cliente`));
    console.log(chalk.blueBright(`15 - Listagem do consumo dos produtos ou serviços mais consumidos`));
    console.log(chalk.blueBright(`16 - Listagem do consumo dos produtos ou serviços menos consumidos`));
    console.log(chalk.blueBright(`17 - Listagem do produto ou serviço mais consumido`));
    console.log(chalk.blueBright(`18 - Listagem do produto ou serviço mais consumido por gênero`));
    console.log(chalk.blueBright(`19 - Listagem dos clientes que mais consumiram em valor`));
    console.log(chalk.red(`0 - Sair`));

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualiza()
            break;
        case 4:
            let exclusao = new ExcluirCliente(empresa.getClientes)
            exclusao.Exclui()
            break;
        case 5:
            let cadastrarProd = new CadastroProdutos(empresa.getProdutos)
            cadastrarProd.cadastrar()
            break;
        case 6:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 7:
            let atualizarProdutos = new AtualizarProdutos(empresa.getProdutos)
            atualizarProdutos.atualiza()
            break;
        case 8:
            let exclusaoProduto = new ExcluirProduto(empresa.getProdutos)
            exclusaoProduto.Exclui()
            break;
        case 9:
            let cadastrarSer = new CadastroServicos(empresa.getServicos)
            cadastrarSer.cadastrar()
            break
        case 10:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break
        case 11:
            let atualizaSer = new AtualizarServicos(empresa.getServicos)
            atualizaSer.atualiza()
            break
        case 12:
            let excluirSer = new ExcluirServico(empresa.getServicos)
            excluirSer.Exclui()
            break
        case 13:
            let listagemGem = new ListagemGenero(empresa.getClientes)
            listagemGem.listar()
            break
        case 14:
            let cadastroConsumoCliente = new CadastroConsumoCliente(empresa.getClientes,empresa)
            cadastroConsumoCliente.cadastrar()
            break
        case 15:
            let listagem10mais = new ListagemConsumoMais(empresa.getClientes)
            listagem10mais.listar()
            break
        case 16:
            let listagem10menos = new ListagemConsumoMenos(empresa.getClientes)
            listagem10menos.listar()
            break
        case 17:
            let listagemProdutosOuServicosMais = new ListagemProdutosOuServicosMais(empresa)
            listagemProdutosOuServicosMais.listar()
            break
        case 18:
            let listagemConsumoGem = new ListagemComusumoGen(empresa)
            listagemConsumoGem.listar()
            break
        case 19:
            let listagemConsumoValor = new ListagemComusumoValor(empresa)
            listagemConsumoValor.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}