import {useNavigate} from 'react-router-dom';
import Layout from '../components/Layout';
import FormItem from '../components/FormItem';
import {useKoleksi} from '../context/KoleksiContext';

export default function Tambah() {
  const navigate = useNavigate();
  const {tambahItem} = useKoleksi();
  const handleSimpan = (data) => {
    tambahItem(data);
    navigate('/koleksi');
  };

  return (
    <Layout>
      <h2>Tambah Proyek Baru</h2>
      <FormItem onSimpan={handleSimpan} />
    </Layout>
  );
}
