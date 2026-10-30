import TataLetak from '../components/TataLetak';
import StatCard from '../components/StatCard';
import { useKoleksi } from '../context/KoleksiContext';

export default function Beranda() {
  const { koleksi = [], loading } = useKoleksi();

  
  const totalKategori = new Set((koleksi || []).map((item) => item.kategori)).size;

  return (
    <TataLetak>
      <h1>Portofolio Proyek</h1>
      <p>Selamat datang di sistem manajemen portofolio proyek.</p>

      {loading ? (
        <p>Memuat ringkasan data...</p>
      ) : (
        <div className="stats-grid">
          <StatCard judul="Total Proyek" jumlah={koleksi.length} />
          <StatCard judul="Total Kategori" jumlah={totalKategori} />
        </div>
      )}
    </TataLetak>
  );
}