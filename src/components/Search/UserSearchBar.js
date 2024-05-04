// SearchBar.js
import React, { useState } from 'react';

const UserSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call API or perform search logic here
  };

  return (
    <div className="flex items-center justify-center w-full mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for sports..."
        className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default UserSearchBar;