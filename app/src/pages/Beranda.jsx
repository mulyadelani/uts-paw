import { Link } from 'react-router-dom';
import TataLetak from '../components/TataLetak';
import StatCard from '../components/StatCard';
import { useKoleksi } from '../context/KoleksiContext';

export default function Beranda() {
  const { koleksi = [], loading } = useKoleksi();

  const totalKategori = new Set((koleksi || []).map((item) => item.kategori)).size;

  return (
    <TataLetak>
      <div className="hero-beranda">
        <span className="badge-tema">Tema: Portofolio Proyek</span>
        <h1>Koleksi Portofolio Proyek</h1>
        <p className="subjudul-hero">
          Platform dokumentasi dan manajemen karya pengembangan aplikasi web, mobile, dan kecerdasan buatan.
        </p>

        <div className="aksi-hero">
          <Link to="/koleksi" className="btn-pink-utama">
            Lihat Semua Koleksi &rarr;
          </Link>
          <Link to="/tambah" className="btn-pink-outline">
            + Tambah Proyek
          </Link>
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>Memuat ringkasan data...</p>
      ) : (
        <div className="stats-grid">
          <StatCard
            judul="Total Proyek"
            jumlah={koleksi.length}
            keterangan="Seluruh karya yang tersimpan"
          />
          <StatCard
            judul="Total Kategori"
            jumlah={totalKategori}
            keterangan="Bidang proyek berbeda"
          />
        </div>
      )}
    </TataLetak>
  );
}