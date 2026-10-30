import {useNavigate} from 'react-router-dom';
import TataLetak from '../components/TataLetak';
import FormTambahProyek from '../components/FormTambahProyek';
import {useKoleksi} from '../context/KoleksiContext';

export default function Tambah() {
  const navigate = useNavigate();
  const {tambahItem} = useKoleksi();
  const handleSimpan = (data) => {
    tambahItem(data);
    navigate('/koleksi');
  };

  return (
    <TataLetak>
      <h2>Tambah Proyek Baru</h2>
      <FormTambahProyek onSubmitProyek={handleSimpan} />
    </TataLetak>
  );
}
