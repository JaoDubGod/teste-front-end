import './Footer.scss';

const colunas = [
  {
    titulo: 'institucional',
    links: ['Sobre nós', 'Trabalhe conosco', 'Política de privacidade'],
  },
  {
    titulo: 'ajuda',
    links: ['Como comprar', 'Trocas e devoluções', 'Formas de pagamento'],
  },
  {
    titulo: 'minha conta',
    links: ['Meus pedidos', 'Meus dados', 'Favoritos'],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__topo">
        <div className="footer__container">
          <div className="footer__marca">
            <div className="footer__logo">Econverse</div>
            <p className="footer__descricao">
              A melhor loja de tecnologia com os melhores preços do mercado.
            </p>
          </div>

          {colunas.map((coluna) => (
            <div className="footer__coluna" key={coluna.titulo}>
              <h3 className="footer__coluna-titulo">{coluna.titulo}</h3>
              <ul className="footer__coluna-lista">
                {coluna.links.map((link) => (
                  <li key={link}>
                    <a href="#topo">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__base">
        <div className="footer__container">
          <p>© {new Date().getFullYear()} Econverse. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
