import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center p-8">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">Welcome to Campus Club Finder!</h1>
      <p className="mb-8">Discover your community. Find a club that fits your passion.</p>
      <Link to="/clubs" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Explore Clubs
      </Link>
    </div>
  );
}