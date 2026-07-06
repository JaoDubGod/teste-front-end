/** 
 * Formatando o valor numérico para o formato monetário brasileiro (R$)
 * Exemplo: 15000 => R$ 15.000,00
 */
export function formatPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

/**
 * Gerando um preço de vitrine.
 * Valor antigo, sem o desconto
 */
export function gerarPrecoVitrine(preco: number): number {
    return Math.round(preco * 1.18);
}