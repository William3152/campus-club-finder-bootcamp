import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
  );
}