import { useEffect, type MouseEvent } from 'react';
import type { Produto } from '../../types/Produtos';
import { formatPreco, gerarPrecoVitrine } from '../../utils/formatPreco';
import './Modal.scss';

interface ModalProps {
  produto: Produto | null;
  aoFechar: () => void;
}

export function Modal({ produto, aoFechar }: ModalProps) {
  const estaAberto = produto !== null;

  // Fecha o modal se o usuário apertar a tecla Esc
  useEffect(() => {
    if (!estaAberto) return;

    function aoApertarTecla(evento: KeyboardEvent) {
      if (evento.key === 'Escape') aoFechar();
    }

    window.addEventListener('keydown', aoApertarTecla);
    return () => window.removeEventListener('keydown', aoApertarTecla);
  }, [estaAberto, aoFechar]);

  if (!estaAberto) return null;

  // Fecha o modal se o clique for no fundo escuro, não na caixa branca
  function aoClicarNoFundo(evento: MouseEvent<HTMLDivElement>) {
    if (evento.target === evento.currentTarget) aoFechar();
  }

  return (
    <div className="modal-fundo" onClick={aoClicarNoFundo}>
      <div className="modal-caixa">
        <button
          type="button"
          className="modal-caixa__fechar"
          onClick={aoFechar}
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="modal-caixa__imagem">
          <img src={produto!.photo} alt={produto!.productName} />
        </div>

        <div className="modal-caixa__corpo">
          <h2 className="modal-caixa__nome">{produto!.productName}</h2>
          <p className="modal-caixa__descricao">{produto!.descriptionShort}</p>

          <div className="modal-caixa__precos">
            <span className="modal-caixa__preco-antigo">
              de {formatPreco(gerarPrecoVitrine(produto!.price))}
            </span>
            <span className="modal-caixa__preco-novo">
              {formatPreco(produto!.price)}
            </span>
            <span className="modal-caixa__parcelamento">
              em até 12x sem juros
            </span>
          </div>

          <button type="button" className="modal-caixa__comprar">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}
