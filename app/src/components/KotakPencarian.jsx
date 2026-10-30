export default function KotakPencarian({
  kataKunci = '',
  onCari,
  pilihanKategori = 'Semua',
  onPilihKategori,
  listKategori = [],
}) {
  return (
    <div className="filter-container">
      <input
        type="search"
        placeholder="Cari berdasarkan judul..."
        value={kataKunci}
        onChange={(e) => onCari && onCari(e.target.value)}
      />

      <select
        value={pilihanKategori}
        onChange={(e) => onPilihKategori && onPilihKategori(e.target.value)}
      >
        {(listKategori || []).map((kat) => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  );
}