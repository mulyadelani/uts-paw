import {useParams, useNavigate, Link} from 'react-router-dom';
import TataLetak from '../components/TataLetak';
import {useKoleksi} from '../context/KoleksiContext';

export default function Detail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {koleksi, hapusItem} = useKoleksi();

  const item = koleksi.find((i) => String(i.id) === String(id));

  if (!item) {
    return (
      <TataLetak>
        <h2>Data tidak ditemukan</h2>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </TataLetak>
    );
  }

  const handleHapus = () => {
    if (window.confirm('Yakin ingin menghapus item ini?')) {
      hapusItem(item.id);
      navigate('/koleksi');
    }
  };

  return (
    <TataLetak>
      <h2>{item.judul}</h2>
      <div className="detail-box">
        <p><strong>Kategori:</strong> {item.kategori}</p>
        <p><strong>Teknologi:</strong> {item.teknologi}</p>
        <p><strong>Tahun:</strong> {item.tahun}</p>
        <p><strong>Tautan:</strong> <a href={item.tautan} target="_blank" rel="noreferrer">{item.tautan}</a></p>

        <button onClick={handleHapus} className="btn-danger">Hapus</button>
        <br/>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </TataLetak>
  );
}

    