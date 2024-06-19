import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="w-96 bg-blue-900 min-h-screen p-4 flex flex-col" >
    <div className="flex flex-col items-center mb-4">
      <img src="/logo.png" alt="Logo" className="mb-4" style={{ width: '192px', height: '192px' }} />
      <hr className="w-full border-t border-gray-500 mt-4" />
    </div>
    <ul className="flex-grow w-full text-gray-200">
      <li className="mb-4">
        <Link to="/" className="text-lg font-semibold hover:underline">Home</Link>
      </li>
      <li className="mb-4">
        <Link to="/data" className="text-lg font-semibold hover:underline">Data</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

