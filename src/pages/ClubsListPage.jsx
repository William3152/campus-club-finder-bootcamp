import { useState, useMemo } from 'react';
import { clubs as initialClubs } from '../data/clubs';
import ClubCard from '../components/ClubCard'; // Akan kita buat

export default function ClubsListPage() {
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [sortType, setSortType] = useState('name-az'); // 'name-az', 'name-za'

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
    <div className="container mx-auto p-4">
      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortType} onChange={(e) => setSortType(e.target.value)} className="border p-1 rounded">
            <option value="name-az">Name A-Z</option>
            <option value="name-za">Name Z-A</option>
          </select>
        </div>
        <div>
          <button onClick={() => setView('grid')} className={`mr-2 p-2 ${view === 'grid' ? 'bg-blue-500 text-white' : ''}`}>Grid</button>
          <button onClick={() => setView('list')} className={`p-2 ${view === 'list' ? 'bg-blue-500 text-white' : ''}`}>List</button>
        </div>
      </div>

      {/* Club Display */}
      <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'}>
        {sortedClubs.map(club => (
          <ClubCard key={club.id} club={club} view={view} />
        ))}
      </div>
    </div>
  );
}