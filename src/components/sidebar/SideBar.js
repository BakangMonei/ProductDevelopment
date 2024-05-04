import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen fixed top-0 left-0 w-64 bg-gray-900 text-white">
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
          <ul>
            <li>
              <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block py-2 px-4 hover:bg-gray-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/events" className="block py-2 px-4 hover:bg-gray-700">
                Events
              </Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 px-4 hover:bg-gray-700">
                Team
              </Link>
            </li>
            <li>
              <Link to="/signup" className="block py-2 px-4 hover:bg-gray-700">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;