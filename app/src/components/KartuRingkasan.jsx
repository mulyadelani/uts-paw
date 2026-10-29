export default function KartuRingkasan({ judul, angka}) {
    return (
        <div className="stat-card">
            <h4>{judul}</h4>
            <p className="stat-number">{angka}</p>
        </div>
    );
}