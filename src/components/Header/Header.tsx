import './Header.scss';

export function Header() {
  return (
    <header className="header">
        <div className = "header__container">
            <div className="header__logo">
                <span className = "header__logo-icon">&#9679;</span>
                Econverse
            </div>
        </div>

        <div className="header__search">
            <input 
                type="text"
                className="header__search-input"
                placeholder="O que você está procurando?"
            />
            <button className="header__search-button" aria-label='Buscar'>
                🔍
            </button>
        </div>

        <nav className='header__actions'>
            <button className='header__action' aria-label='Minha Conta'>
                <span className="header__action-icon">👤</span>
                <span className='header__action-label'>Entrar</span>
            </button>
            <button className='header__action' aria-label='Wishlist'>
                <span className="header__action-icon">❤️</span>
                <span className='header__action-label'>Favoritos</span>
            </button>
            <button className='header__action' aria-label='Carrinho'>
                <span className="header__action-icon">🛒</span>
                <span className='header__action-label'>Carrinho</span>
            </button>
        </nav>
    </header>
  );
}