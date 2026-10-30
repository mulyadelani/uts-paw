import TataLetak from '../components/TataLetak';

export default function Tentang() {
  return (
    <TataLetak>
      <h2>Tentang Pengembang</h2>
      <div className="about-card">
        <p><strong>Nama:</strong> Mulya Delani </p>
        <p><strong>NIM:</strong> 123140019 </p>
        <p><strong>Kelas:</strong> RA </p>
        <p><strong>Tema:</strong> Portofolio Proyek </p>
        <p>
          <strong>Repository:</strong>{' '}
          <a href="https://github.com/mulyadelani/uts-paw.git" target="_blank" rel="noreferrer"> 
              Github Repository
          </a>
        </p>
      </div>
    </TataLetak>
  );
}
