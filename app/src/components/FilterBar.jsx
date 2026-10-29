export default function FilterBar({ cariJudul, onUbahcariJudul, filterKategori, onUbahKategori, daftarKategori }) {
return (
    <div className="filter-container">
        <input
            type="search"
            placeholder="Cari berdasarkan judul..."
            value={cariJudul}
            onChange={(e) => onUbahcariJudul(e.target.value)}
            />
            <select value={filterKategori} onChange={(e) => onUbahKategori(e.target.value)}>
                {daftarKategori.map((kat) => (
                    <option key={kat} value={kat}>{kat}</option>
                ))}
            </select>
        </div>

        );
    }
