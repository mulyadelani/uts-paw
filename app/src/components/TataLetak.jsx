import { NavLink } from 'react-router-dom';

export default function TataLetak({ children }) {
  return (
    <div id="kerangka-utama" className="wadah-aplikasi">
      <header id="navigasi-atas" className="header-web">
        <div className="logo-area">
          <h2>Portofolio Proyek</h2>
        </div>
        <nav className="menu-navigasi">
          <NavLink to="/" end className="menu-item">
            Beranda
          </NavLink>
          <NavLink to="/koleksi" className="menu-item">
            Koleksi
          </NavLink>
          <NavLink to="/tambah" className="menu-item">
            Tambah
          </NavLink>
          <NavLink to="/statistik" className="menu-item">
            Statistik
          </NavLink>
          <NavLink to="/tentang" className="menu-item">
            Tentang
          </NavLink>
        </nav>
      </header>

      <main id="konten-halaman" className="isi-konten">
        {children}
      </main>

      <footer id="footer-bawah" className="kaki-web">
        <p>&copy; 2026 Portofolio Proyek - Mulya Delani (NIM 123140019)</p>
      </footer>
    </div>
  );
}