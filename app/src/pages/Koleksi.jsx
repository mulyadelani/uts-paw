import Layout from '../components/Layout';
import FilterBar from '../components/FilterBar';
import KartuItem from '../components/KartuItem';
import {useKoleksi} from '../context/KoleksiContext';
import {useFilterKoleksi} from '../hooks/useFilterKoleksi';

export default function Koleksi() {
  const {koleksi, loading, error} = useKoleksi();
  const {kataKunci, setKataKunci, kategoriTerpilih, setKategoriTerpilih, daftarKategori, koleksiTersaring} = useFiterKoleksi(koleksi)
  if (loading) return <Layout><p>loading...</p></Layout>;
  if (error) return <Layout><p>error: {error}</p></Layout>;

  return (
    <Layout>
      <h2>Daftar Portofolio Proyek </h2>
      <FilterBar
        kataKunci={kataKunci}
        onUbahKataKunci={setKataKunci}
        kategoriTerpilih={kategoriTerpilih}
        obUbahKategori={setKategoriTerpilih}
        daftarKategori={daftarKategori}
      />
      <div className="grid-list">
        {koleksiTersaring.length === 0 ? (
          <p>Tidak ada proyek yang cocok.</p>
        ) : (
          koleksiTersaring.map((item) => <KartuItem key={item.id} item={item} />)
        )}
      </div>
    </Layout>
  );
}
    
     