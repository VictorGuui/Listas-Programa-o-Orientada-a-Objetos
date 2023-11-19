import Produto from "../modelo/produto";

let produtos: {
  nome: string;
  valor: number;
}[] = [
  {
    nome: 'Kit da Nativa SPA',
    valor: 150
  },
  {
    nome: 'Protetor Solar NEEDS',
    valor: 50
  },
  {
    nome: 'Base Sérum Nude',
    valor: 109
  },
  {
    nome: 'Corretivo CObertura Extrema',
    valor: 49
  },
  {
    nome: 'Batom CC Hidratante',
    valor: 43
  },
  {
    nome: 'Blush Color Face',
    valor: 27
  },
  {
    nome: 'Prime Blur Una',
    valor: 64
  },
  {
    nome: 'Sabonete Gel p/ Rostos Faces',
    valor: 29
  },
  {
    nome: 'Sabonete Esfoliante Rosto&Corpo',
    valor: 76
  },
  {
    nome: 'Shampoo + Condicionador Eudora',
    valor: 127
  },
 
  {
    nome: 'Kit Voyage Desodorante Colonia + Shampoo',
    valor: 138
  },
  {
    nome: 'Óleo Capilar Raparador Karité',
    valor: 36
  },
  {
    nome: 'Máscara Capilar Acelera o Crescimento 250g',
    valor: 59
  },
  {
    nome: 'Espuma de Barbear Eudora H',
    valor: 44
  },
  {
    nome: 'Combo La Victorie Perfume 75ml',
    valor: 302
  },
  {
    nome: 'Combo Club 6: Desodorante Colônia 95ml + Balm Pós Barba 75g',
    valor: 151
  },
  {
    nome: 'Hidratante Mãos FPS 15 Algas do Pacíficos 50g',
    valor: 24
  },
  {
    nome: 'Base Líquida Skin Control Cor',
    valor: 62
  },
  {
    nome: 'Batom Líquido Bordô Intenso Matte',
    valor: 47
  },
  {
    nome: 'Combo Nutri Rose ',
    valor: 226
  },
  {
    nome: 'Combo Sachê Mascara Instance',
    valor: 56
  }
];

let produtosInstanciados: Produto[] = 
  produtos.map(({ nome, valor }) => new Produto(nome, valor));

export { produtosInstanciados }
