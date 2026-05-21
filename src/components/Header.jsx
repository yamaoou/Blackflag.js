// src/components/Header.jsx

export default function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <h1>BlackFlag</h1>
      </div>

      <div className="search">
        <input type="text" />
        <span>⌕</span>
      </div>

      <nav>
        <a href="#">Games</a>
        <a href="#">Notícias</a>
        <a href="#">Avaliações</a>
      </nav>

      <img
        className="profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JsZZy81pCCUDfv4944Q_z95Zpa8tJb1siw&s"
        alt=""
      />
    </header>
  );
}