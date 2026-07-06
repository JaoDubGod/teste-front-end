import type { Produto } from '../../types/Produtos';
import { formatPreco, gerarPrecoVitrine } from '../../utils/formatPreco';
import './CartaoProduto.scss';

interface CartaoProdutoProps {
  produto: Produto;
  onSelecionar: (produto: Produto) => void;
}

export function CartaoProduto({ produto, onSelecionar }: CartaoProdutoProps) {
  return (
    <article className="cartao-produto" onClick={() => onSelecionar(produto)}>
      <div className="cartao-produto__imagem">
        <img src={produto.photo} alt={produto.productName} />
      </div>

      <h3 className="cartao-produto__nome">{produto.productName}</h3>

      <div className="cartao-produto__precos">
        <span className="cartao-produto__preco-antigo">
          de {formatPreco(gerarPrecoVitrine(produto.price))}
        </span>
        <span className="cartao-produto__preco-novo">
          {formatPreco(produto.price)}
        </span>
      </div>

      <button
        type="button"
        className="cartao-produto__comprar"
        onClick={(evento) => {
          evento.stopPropagation();
          onSelecionar(produto);
        }}
      >
        COMPRAR
      </button>
    </article>
  );
}
