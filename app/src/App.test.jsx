import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App';

describe('Pengujian Rute Dasar Aplikasi', () => {
  it('Menampilkan judul utama pada halaman Beranda', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  });

  it('Menampilkan halaman 404 ketika rute tidak ditemukan', () => {
    render(
      <MemoryRouter initialEntries={['/rute-salah-random']}>
        <App/>
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeDefined();
  });
});
