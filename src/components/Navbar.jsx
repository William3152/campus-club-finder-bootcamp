import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#2563eb' // Contoh warna biru
  };

  return (
    <nav className="p-4 bg-gray-100 shadow-md">
      <ul className="flex space-x-8 justify-center">
        <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink></li>
        <li><NavLink to="/clubs" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Clubs</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink></li>
      </ul>
    </nav>
  );
}