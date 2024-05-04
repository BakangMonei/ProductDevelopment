// FavoritesList.js
import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="flex flex-col w-full p-4 mb-4 bg-white border border-gray-200 rounded-md shadow-md">
      <h2 className="text-lg font-bold">Favorites</h2>
      <ul>
        {favorites.map((sport) => (
          <li key={sport.id} className="py-2 border-b border-gray-200">
            {sport.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;