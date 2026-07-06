import type { Produto } from '../../types/Produtos';
import { CartaoProduto } from '../CartaoProduto/CartaoProduto';
import './ListaProduto.scss';

interface ListaProdutoProps {
  titulo: string;
  produtos: Produto[];
  onSelecionarProduto: (produto: Produto) => void;
}

export function ListaProduto({
  titulo,
  produtos,
  onSelecionarProduto,
}: ListaProdutoProps) {
  return (
    <section className="lista-produto">
      <div className="lista-produto__container">
        <h2 className="lista-produto__titulo">{titulo}</h2>

        <div className="lista-produto__grid">
          {produtos.map((produto) => (
            <CartaoProduto
              key={produto.productName}
              produto={produto}
              onSelecionar={onSelecionarProduto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
