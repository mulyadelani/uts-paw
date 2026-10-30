import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const dataMockProyek = [
  {
    id: '1',
    judul: 'Aplikasi Inventaris Gudang',
    kategori: 'Aplikasi Web',
    teknologi: 'Vue.js, Express',
    tahun: 2024,
    tautan: 'https://github.com/contoh/gudang-app',
  },
  {
    id: '2',
    judul: 'Sistem Deteksi Hama Tanaman',
    kategori: 'Kecerdasan Buatan',
    teknologi: 'PyTorch, FastAPI',
    tahun: 2025,
    tautan: 'https://github.com/contoh/jagung-ai',
  },
];

describe('Pengujian Otomatis Aplikasi Portofolio Mulya Delani', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => dataMockProyek,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('1. Menampilkan judul dan ringkasan portofolio di halaman Beranda', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1 })
    ).toBeInTheDocument();
  });

  it('2. Menampilkan identitas pengembang Mulya Delani dan NIM di halaman Tentang', () => {
    render(
      <MemoryRouter initialEntries={['/tentang']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /tentang pengembang/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Mulya Delani/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/123140019/).length).toBeGreaterThan(0);
  });

  it('3. Menampilkan tabel rekapitulasi pada halaman Statistik', () => {
    render(
      <MemoryRouter initialEntries={['/statistik']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /kategori/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /jumlah item/i })
    ).toBeInTheDocument();
  });

  it('4. Menampilkan formulir input penambahan proyek baru di halaman Tambah', () => {
    render(
      <MemoryRouter initialEntries={['/tambah']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/judul/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /simpan/i })).toBeInTheDocument();
  });

  it('5. Menampilkan pesan data tidak ditemukan saat membuka ID koleksi yang salah', async () => {
    render(
      <MemoryRouter initialEntries={['/koleksi/999999']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/data tidak ditemukan/i)).toBeInTheDocument();
    });
  });

  it('6. Menampilkan halaman 404 ketika pengguna mengakses rute yang tidak dikenal', () => {
    render(
      <MemoryRouter initialEntries={['/rute-acak-tidak-terdaftar']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});