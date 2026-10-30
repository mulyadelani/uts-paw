import { useState } from 'react';

export default function FormTambahProyek({ onSubmitProyek }) {
  const [formData, setFormData] = useState({
    judul: '',
    kategori: 'Aplikasi Web',
    teknologi: 'JavaScript',
    tahun: 2026,
    tautan: 'https://github.com/mulyadelani',
  });
  const [pesanError, setPesanError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const kirimForm = (e) => {
    e.preventDefault();
    if (!formData.judul.trim()) {
      setPesanError('Judul proyek wajib diisi');
      return;
    }
    onSubmitProyek(formData);
  };

  return (
    <form onSubmit={kirimForm} className="form-proyek">
      {pesanError && (
        <div role="alert" className="notif-error">
          {pesanError}
        </div>
      )}

      <div className="baris-input">
        <label htmlFor="field-judul">Judul</label>
        <input
          id="field-judul"
          name="judul"
          type="text"
          value={formData.judul}
          onChange={handleChange}
          placeholder="Nama proyek"
        />
      </div>

      <div className="baris-input">
        <label htmlFor="field-kategori">Kategori</label>
        <select
          id="field-kategori"
          name="kategori"
          value={formData.kategori}
          onChange={handleChange}
        >
          <option value="Aplikasi Web">Aplikasi Web</option>
          <option value="Aplikasi Mobile">Aplikasi Mobile</option>
          <option value="Kecerdasan Buatan">Kecerdasan Buatan</option>
          <option value="Internet of Things">Internet of Things</option>
          <option value="Sistem Informasi Geografis">Sistem Informasi Geografis</option>
        </select>
      </div>

      <div className="baris-input">
        <label htmlFor="field-teknologi">Teknologi</label>
        <input
          id="field-teknologi"
          name="teknologi"
          type="text"
          value={formData.teknologi}
          onChange={handleChange}
        />
      </div>

      <div className="baris-input">
        <label htmlFor="field-tahun">Tahun</label>
        <input
          id="field-tahun"
          name="tahun"
          type="number"
          value={formData.tahun}
          onChange={handleChange}
        />
      </div>

      <div className="baris-input">
        <label htmlFor="field-tautan">Tautan</label>
        <input
          id="field-tautan"
          name="tautan"
          type="url"
          value={formData.tautan}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="tombol-simpan">
        Simpan Proyek
      </button>
    </form>
  );
}