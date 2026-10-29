import {createContext, useContext, useState, useEffect} from 'react' ;
import {useLocalStorage} from '../hooks/useLocalStorage';

export const KoleksiContext = createContext();

export function KoleksiProvider({children}){
    const [koleksiLokal, setKoleksiLokal] = useLocalStorage('data_portofolio_v2', null);
    const [koleksi, setKoleksi] = useState(koleksiLokal || []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function ambilData() {
            if (Array.isArray(koleksiLokal) && koleksiLokal.length > 0){
                setKoleksi(koleksiLokal);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);
            try{
                const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`);
                if (!res.ok) throw new Error('Gagal mengambil data server');
                const data = await res.json();
                setKoleksi(data);
                setKoleksiLokal(data);
            } catch (err) {
                setError(err.message || 'Error memuat data');
            } finally {
                setLoading(false);
            }
        }
        ambilData();
    }, []);

    const tambahItem = (itemBaru) => {
        const itemLengkap = {
            id: String(Date.now()),
            judul: itemBaru.judul.trim(),
            kategori: itemBaru.kategori?.trim() || 'Aplikasi Web',
            teknologi: itemBaru.teknologi?.trim() || 'React',
            tahun: Number(itemBaru.tahun) || 2026,
            tautan: itemBaru.tautan?.trim() || 'https://github.com',
        };

        const dataBaru = [...koleksi, itemLengkap];
        setKoleksi (dataBaru);
        setKoleksiLokal(dataBaru);
    };

        const hapusItem = (id) => {
            const dataBaru = koleksi.filter((item) => String(item.id) !== String(id));
            setKoleksi(dataBaru);
            setKoleksiLokal(dataBaru);
        };
        
        return (
            <KoleksiContext.Provider value={{ koleksi, loading, error, tambahItem, hapusItem}}>
                {children}
            </KoleksiContext.Provider>
        );
    }

    export function useKoleksi() {
        return useContext(KoleksiContext);
    }