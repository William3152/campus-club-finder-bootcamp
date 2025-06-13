import { Link } from 'react-router-dom';

export default function ClubCard({ club, view }) {
  return (
    // Terapkan flex-row untuk mode 'list' secara responsif (hanya di layar medium ke atas)
    <div className={`bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg flex h-full ${
      view === 'list' ? 'flex-col md:flex-row md:items-center' : 'flex-col'
    }`}>

      {/* Ubah ukuran gambar secara dinamis berdasarkan 'view' */}
      <img
        src={club.image}
        alt={club.name}
        className={`object-cover rounded-md flex-shrink-0 ${
          view === 'list' 
          ? 'w-full h-40 md:w-48 md:h-32 mb-4 md:mb-0 md:mr-6' // Gaya untuk List View
          : 'w-full h-48 mb-4' // Gaya untuk Grid View
        }`}
      />
      
      {/* Konten teks akan mengisi sisa ruang */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{club.name}</h3>
        <p className="text-gray-300 my-2 flex-grow">
          {club.shortDescription}
        </p>
        <Link to={`/clubs/${club.id}`} className="text-blue-400 hover:underline self-start font-medium">
          View Details
        </Link>
      </div>

    </div>
  );
}