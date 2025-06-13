import { useState, useMemo } from 'react';
import { clubs as initialClubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';

export default function ClubsListPage() {
  const [view, setView] = useState('grid');
  const [sortType, setSortType] = useState('name-az');

  const sortedClubs = useMemo(() => {
    const sorted = [...initialClubs];
    if (sortType === 'name-az') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'name-za') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  }, [sortType]);

  return (
    <div className="bg-gray-900 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-white font-medium">Sort by:</label>
            <select 
              id="sort" 
              value={sortType} 
              onChange={(e) => setSortType(e.target.value)} 
              className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name-az">Name A-Z</option>
              <option value="name-za">Name Z-A</option>
            </select>
          </div>
          
          {/* Styling untuk tombol view */}
          <div>
            <button onClick={() => setView('grid')} className={`px-4 py-2 rounded-l-md transition-colors ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
              Grid
            </button>
            <button onClick={() => setView('list')} className={`px-4 py-2 rounded-r-md transition-colors ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
              List
            </button>
          </div>
        </div>

        {/* Tampilan Grid atau List Klub */}
        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-6'}>
          {sortedClubs.map(club => (
            <ClubCard key={club.id} club={club} view={view} />
          ))}
        </div>

      </div>
    </div>
  );
}