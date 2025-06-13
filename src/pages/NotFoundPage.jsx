import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-900">
      
      {/* Konten Halaman */}
      <div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-300 mt-2 mb-6">
          Page Not Found
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-sm">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back to Home
        </Link>
      </div>

    </div>
  );
}