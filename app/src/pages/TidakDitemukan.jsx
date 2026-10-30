import {Link} from 'react-router-dom';
import TataLetak from '../components/TataLetak';

export default function TidakDitemukan() {
  return (
    <TataLetak>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
    </TataLetak>
  );
}