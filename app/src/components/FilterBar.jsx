export default function FilterBar({ kataKunci, onUbahKataKunci, kategoriTerpilih, onUbahKategori, daftarKategori }) {
return (
    <div className="filter-container">
        <input
            type="search"
            placeholder="Cari berdasarkan judul..."
            value={kataKunci}
            onChange={(e) => onUbahKataKunci(e.target.value)}
            />
            <select value={kategoriTerpilih} onChange={(e) => onUbahKategori(e.target.value)}>
                {daftarKategori.map((kat) => (
                    <option key={kat} value={kat}>{kat}</option>
                ))}
            </select>
        </div>

        );
    }
