import { NavLink } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <header className="site-header">
        <h1> Portofolio Proyek</h1>
        <nav className="main-nav">
          <NavLink to="/" end>Beranda</NavLink>
          <NavLink to="/koleksi">Koleksi</NavLink>
          <NavLink to="/tambah">Tambah</NavLink>
          <NavLink to="/statistik">Statistik</NavLink>
          <NavLink to="/tentang">Tentang</NavLink>
        </nav>
      </header>
      <main className="main-content">{childrenn}</main>
      <footer className="site-footer">
        <p>&copy; 2026 - Portofolio Proyek NIM 123140019</p>
      </footer>
    </div>
  );
}