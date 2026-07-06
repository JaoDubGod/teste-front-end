// Os nomes dos campos abaixo seguem EXATAMENTE o formato do JSON que vem da API
// (products.json). Por isso estão em inglês, mesmo o resto do projeto usando
// nomes em português — a interface precisa espelhar os dados reais.
export interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface RespostaProdutos {
  success: boolean;
  products: Produto[];
}
