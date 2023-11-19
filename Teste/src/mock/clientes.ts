import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
//import { produtosInstanciados } from "./produtos";

let clientes: {
  nome: string;
  nomeSocial: string;
  genero: 'm' | 'f';
  cpf: CPF;
  rgs: Array<RG>
  dataCadastro: Date
  telefones: Array<Telefone>
  produtosConsumidos: Array<Produto>
  servicosConsumidos: Array<Servico>
}[] = [

  {
    nome: 'Marina Angela',
    nomeSocial: 'MARI',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21-05-2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002)' ))], 
  },
  {
    nome: 'Mirella Araújo',
    nomeSocial: 'Mi',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'André Victor',
    nomeSocial: 'Cabeção',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Lucca Araújo',
    nomeSocial: 'Luquinha',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Adriano Araújo',
    nomeSocial: 'Gordo',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Adrianne Araújo',
    nomeSocial: 'Baba',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Marilia Araújo',
    nomeSocial: 'Vovó',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Dimas Maciel',
    nomeSocial: 'Vovô',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'André Maciel',
    nomeSocial: 'Papai',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Leticia de Freitas',
    nomeSocial: 'Priminha',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Lucas de Freitas',
    nomeSocial: 'Priminha',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Debora Taira',
    nomeSocial: 'Dede',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Italo Bonilha',
    nomeSocial: 'Tininho',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Paulo Wesley',
    nomeSocial: 'Paulinho',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Isaias Baldim',
    nomeSocial: 'Isa',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Leticia Ribeiro',
    nomeSocial: 'Let',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Daniel Fialho',
    nomeSocial: 'Deniel',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Bruno Moreira',
    nomeSocial: 'Ocantor',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Miguel dos Santos',
    nomeSocial: 'Miguelito',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Maria Eduarda',
    nomeSocial: 'Duda',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Pedro Seraggi',
    nomeSocial: 'Pedrinho',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'João Pedro',
    nomeSocial: 'JACA',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Elena Gilbert',
    nomeSocial: 'Eleninha',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Demon Salvatore',
    nomeSocial: 'Totoso',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Stefan Salvatore',
    nomeSocial: 'Atensioso',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Klaus Mikaelson',
    nomeSocial: 'Hibrido',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Haley Marshall',
    nomeSocial: 'Lobinha',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Hope Andrea Mikaelson',
    nomeSocial: 'Tribida',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Rebecca Mikaelson',
    nomeSocial: 'Becca',
    genero: 'f',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  },
  {
    nome: 'Elijah Mikaelson',
    nomeSocial: 'Amante',
    genero: 'm',
    cpf: new CPF('036.902.540-78', new Date('21/05/2002')),
    rg: [new RG('30.594.828-3', new Date('21/05/2002'))]
  }
]
  




