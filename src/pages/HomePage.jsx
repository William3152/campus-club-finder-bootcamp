import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    // KELAS BARU DITAMBAHKAN DI SINI: bg-gray-900
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-900">

      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Welcome to Campus Club Finder!
        </h1>

        <img
          src="/images/ClubImage.png"
          alt="Ilustrasi mahasiswa yang berkolaborasi"
          className="mt-8 mb-6 w-full max-w-lg mx-auto" // <-- Kelas untuk styling ukuran dan jarak
        />

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Discover your community. Find a club that fits your passion.
        </p>
        <Link 
          to="/clubs" 
          className="mt-8 inline-block bg-blue-600 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Explore Clubs
        </Link>
      </div>

    </div>
  );
}