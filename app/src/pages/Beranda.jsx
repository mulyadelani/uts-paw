import Layout from '../components/Layout';
import KartuRingkasan from '../components/KartuRingkasan';
import {useKoleksi } from '../context/KoleksiContext';

export default function Beranda() {
  const { koleksi } = useKoleksi();
  const totalKategori = new Set(Koleksi.map((i) => i.kategori)).size;

  return (
    <Layout>
      <h1>Portofolio Proyek</h1>
      <p>Selamat datang di sistem manajemen portofolio proyek terintegrasi.</p>
      <div className="stats-grid">
        <KartuRingkasan judul="Total Proyek" angka={koleksi.length} />
        <KartuRingkasan judul="Total Kategori" angka={totalKategori} />
      </div>
    </Layout>
  );
}
