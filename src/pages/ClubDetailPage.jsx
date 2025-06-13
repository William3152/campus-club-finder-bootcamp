import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clubs } from '../data/clubs';

export default function ClubDetailPage() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);

  // State untuk melacak status keanggotaan
  const [isJoined, setIsJoined] = useState(false);

  // Cek localStorage saat komponen dimuat
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
        <div className="text-center p-8">
            <h1 className="text-2xl font-bold">Club not found!</h1>
            <Link to="/clubs" className="text-blue-600 hover:underline mt-4 inline-block">Back to Clubs</Link>
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
      <img src={club.image} alt={club.name} className="w-full h-96 object-cover rounded-lg mb-4" />
      <p className="text-lg mb-6">{club.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Upcoming Events</h2>
      <ul className="list-disc list-inside mb-6">
        {club.events.map(event => (
          <li key={event.name}>{event.name} - {new Date(event.date).toLocaleDateString()}</li>
        ))}
      </ul>

      {isJoined ? (
        <p className="font-bold text-green-600">You have joined this club!</p> // Pesan jika sudah bergabung 
      ) : (
        <button onClick={handleJoin} className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Join Club
        </button> // Tombol untuk bergabung 
      )}
    </div>
  );
}