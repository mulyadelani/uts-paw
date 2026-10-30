export default function StatCard({ judul, jumlah, keterangan }) {
  return (
    <div className="kotak-stat">
      <h3 className="stat-judul">{judul}</h3>
      <p className="stat-nilai">{jumlah}</p>
      {keterangan && <p className="stat-keterangan">{keterangan}</p>}
    </div>
  );
}