import {useState, useMemo} from 'react';

export function useFilterKoleksi(koleksi = []) {
  const [cariJudul, setcariJudul] = useState('');
    const [filterKategori, setfilterKategori] = useState('Semua');
    const daftarKategori = useMemo(() => {
      const unik = new Set(koleksi.map((item) => item.kategori).filter(Boolean));
    return ['Semua', ...Array.from(unik)];
  }, [koleksi]);

  const koleksiTersaring = useMemo(() => {
    return koleksi.filter((item) => {
      const cocokJudul = item.judul.toLowerCase().includes(cariJudul.trim().toLowerCase());
      const cocokKategori = filterKategori === 'Semua' || item.kategori === filterKategori;
      return cocokJudul && cocokKategori;
    });
  }, [koleksi, cariJudul, filterKategori]);
  
  return {cariJudul, setcariJudul, filterKategori, setfilterKategori, daftarKategori, koleksiTersaring};
}
export default useFilterKoleksi;