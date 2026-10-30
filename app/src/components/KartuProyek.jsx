import { Link } from 'react-router-dom';

export default function KartuProyek({ data }) {
  return (
    <div className="proyek-card">
      <div className="proyek-top">
        <span className="tag-kategori">{data.kategori}</span>
        <span className="teks-tahun">{data.tahun}</span>
      </div>
      <h3 className="proyek-judul">{data.judul}</h3>
      <p className="proyek-tek">Teknologi: {data.teknologi}</p>
      <Link to={`/koleksi/${data.id}`} className="link-detail">
        Lihat Detail
      </Link>
    </div>
  );
}