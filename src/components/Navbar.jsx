import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClasses = "text-lg font-medium text-white hover:text-blue-300 transition-colors duration-200";
  const activeLinkClasses = "underline text-blue-300";

  return (
    // HAPUS bg-gray-100 dan shadow-md agar transparan
    // TAMBAHKAN z-10 agar navbar selalu di atas elemen lain
    <nav className="p-4 absolute top-0 left-0 right-0 z-10">
      <ul className="flex space-x-8 justify-center">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/clubs" 
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
          >
            Clubs
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}