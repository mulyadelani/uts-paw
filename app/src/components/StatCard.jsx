export default function KotakPencarian({
  kataKunci,
  onCari,
  pilihanKategori,
  onPilihKategori,
  listKategori = [],
}) {
  return (
    <div className="panel-filter">
      <div className="grup-input-cari">
        <label htmlFor="input-pencarian">Cari Proyek</label>
        <input
          id="input-pencarian"
          type="search"
          className="input-cari"
          placeholder="Cari berdasarkan judul proyek..."
          value={kataKunci}
          onChange={(e) => onCari(e.target.value)}
        />
      </div>

      <div className="grup-select-kategori">
        <label htmlFor="filter-pilihan-kategori">Kategori</label>
        <select
          id="filter-pilihan-kategori"
          className="select-kategori"
          value={pilihanKategori}
          onChange={(e) => onPilihKategori(e.target.value)}
        >
          {listKategori.map((kat) => (
            <option key={kat} value={kat}>
              {kat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}