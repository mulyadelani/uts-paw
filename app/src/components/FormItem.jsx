import { useState } from 'react';

export default function FormItem({onSimpan}) {
    const [form, setForm] = useState({
        judul: '',
        kategori: 'Aplikasi Web',
        teknologi: '',
        tahun: 2026,
        tautan: '',
    });
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.judul.trim()) {
            setError('Judul wajib diisi');
            return;
        }
        onSimpan(form);
    };

    return (
        <form onSubmit={handleSubmit} className="form-box" noValidate>
            {error && <div role="alert" className="error-banner">{error}</div>}
            <div className="field">
                <label htmlFor="judul">Judul</label>
                <input
                    id="judul"
                    type="text"
                    value={form.judul}
                    onChange={(e) => setForm({ ...form, judul: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="kategori">Kategori</label>
                <select
                    id="kategori"
                    value={form.kategori}
                    onChange={(e) => setForm({ ...form, kategori: e.target.value })}
                >
                    <option value="Aplikasi Web">Aplikasi Web</option>
                    <option value="Aplikasi Mobile">Aplikasi Mobile</option>
                    <option value="Kecerdasan Buatan">Kecerdasan Buatan</option>
                    <option value="Internet of Things">Internet of Things</option>
                    <option value="Otomasi">Otomasi</option>
                    <option value="Sistem Informasi Geografis">Sistem Informasi Geografis</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="tahun">Tahun</label>
                <input
                    id="tahun"
                    type="number"
                    value={form.tahun}
                    onChange={(e) => setForm({ ...form, tahun: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="tautan">Tautan</label>
                <input
                    id="tautan"
                    type="url"
                    value={form.tautan}
                    onChange={(e) => setForm({ ...form, tautan: e.target.value })}
                />
            </div>

            <button type="submit" className="btn-submit">Simpan</button>
        </form>
    );
}

