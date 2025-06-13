import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs } from '../data/clubs';

export default function ClubDetailPage() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);

  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (joinedClubs.includes(clubId)) {
      setIsJoined(true);
    }
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs')) || [];
    if (!joinedClubs.includes(clubId)) {
      const newJoinedClubs = [...joinedClubs, clubId];
      localStorage.setItem('joinedClubs', JSON.stringify(newJoinedClubs));
      setIsJoined(true);
      alert(`Congratulations! You have joined the ${club.name}.`);
    }
  };

  if (!club) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Club not found!</h1>
        <Link to="/clubs" className="text-blue-400 hover:underline mt-4 inline-block">
          Back to Clubs
        </Link>
      </div>
    );
  }

  return (
    // Kontainer utama untuk memberikan padding atas dan tema gelap
    <div className="bg-gray-900 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">

        {/* Tombol Kembali */}
        <Link to="/clubs" className="text-blue-400 hover:underline mb-6 inline-block">
          &larr; Back to All Clubs
        </Link>

        {/* Gambar dengan ukuran yang terkontrol */}
        <img src={club.image} alt={club.name} className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-lg" />

        {/* Warna Teks Disesuaikan */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{club.name}</h1>
        <p className="text-lg text-gray-300 mb-8">{club.description}</p>
        
        <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          {club.events.map(event => (
            <li key={event.name} className="text-gray-300">
              <span className="font-semibold text-white">{event.name}</span> - {new Date(event.date).toLocaleDateString()}
            </li>
          ))}
        </ul>

        {/* Tombol Join Club */}
        {isJoined ? (
          <p className="font-bold text-green-400 text-lg">You have joined this club!</p>
        ) : (
          <button 
            onClick={handleJoin} 
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Join Club
          </button>
        )}
        
      </div>
    </div>
  );
}