import { Link } from 'react-router-dom';

export default function ClubCard({ club, view }) {
  return (
    <div className={`border rounded-lg p-4 shadow-lg ${view === 'list' ? 'flex items-center' : ''}`}>
      <img src={club.image} alt={club.name} className={view === 'grid' ? 'w-full h-48 object-cover mb-4' : 'w-24 h-24 object-cover mr-4'} />
      <div>
        <h3 className="text-xl font-bold">{club.name}</h3>
        <p className="text-gray-600 my-2">{club.shortDescription}</p>
        <Link to={`/clubs/${club.id}`} className="text-blue-600 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}