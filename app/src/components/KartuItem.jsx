import {Link} from 'react-router-dom';

export default function KartuItem({ item }) {
    return (
        <div className="card-item">
            <span className="badge">{item.kategori}</span>
            <h3>{item.judul}</h3>
            <p><strong>Teknologi:</strong> {item.teknologi}</p>
            <p><strong>Tahun:</strong> {item.tahun}</p>
            <Link to={`/koleksi/${item.id}`} className="btn-link">Detail</Link>
        </div>
    );
}