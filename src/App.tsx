import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ListaProduto } from './components/ListaProduto/ListaProduto';
import { Modal } from './components/Modal/Modal';
import { Footer } from './components/Footer/Footer';
import produtosData from './data/products.json';
import type { Produto, RespostaProdutos } from './types/Produtos';

const { products: produtos }: RespostaProdutos = produtosData;

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  return (
    <div id="topo">
      <Header />

      <main>
        <ListaProduto
          titulo="Produtos relacionados"
          produtos={produtos}
          onSelecionarProduto={setProdutoSelecionado}
        />
      </main>

      <Footer />

      <Modal
        produto={produtoSelecionado}
        aoFechar={() => setProdutoSelecionado(null)}
      />
    </div>
  );
}

export default App;
