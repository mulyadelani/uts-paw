import TataLetak from '../components/TataLetak';
import FilterBar from '../components/KotakPencarian';
import KartuItem from '../components/KartuProyek';
import {useKoleksi} from '../context/KoleksiContext';
import {useFilterKoleksi} from '../hooks/useFilterKoleksi';

export default function Koleksi() {
  const {koleksi, loading, error} = useKoleksi();
  const {cariJudul, setcariJudul, filterKategori, setfilterKategori, daftarKategori, koleksiTersaring} = useFilterKoleksi(koleksi)
  if (loading) return <TataLetak><p>loading...</p></TataLetak>;
  if (error) return <TataLetak><p>error: {error}</p></TataLetak>;

  return (
    <TataLetak>
      <h2>Daftar Portofolio Proyek</h2>
      <KotakPencarian
        kataKunci={cariJudul}
        onCari={setcariJudul}
        pilihanKategori={filterKategori}
        onPilihKategori={setfilterKategori}
        listKategori={daftarKategori}
      />
      <div className="grid-list">
        {koleksiTersaring.length === 0 ? (
          <p>Tidak ada proyek yang cocok.</p>
        ) : (
          koleksiTersaring.map((item) => (
            <KartuProyek key={item.id} data={item} />
          ))
      )}
      </div>
    </TataLetak>
  );
}
    
     