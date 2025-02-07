import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Emil</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;