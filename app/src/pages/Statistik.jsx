import Layout from '../components/Layout';
import {useKoleksi} from '../context/KoleksiContext';

export default function Statistik() {
  const {koleksi} = useKoleksi();
  const rekap = koleksi.reduce((acc, curr) => {
    acc[curr.kategori] = (acc[curr.kategori] || 0) + 1;
      return acc;
    }, {});

    return (
      <Layout>
        <h2>Statistik Kategori</h2>
        <table>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah Item</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rekap).map(([kat, jml]) => (
                <tr key={kat}>
                  <td>{kat}</td>
                  <td>{jml}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total Keseluruhan</strong></td>
                <td><strong>{koleksi.length}</strong></td>
              </tr>
            </tbody>
          </table>
        </Layout>
    );
}
    