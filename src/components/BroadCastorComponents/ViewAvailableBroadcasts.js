// components/ViewAvailableBroadcasts.js

import React, { useState } from "react";

const ViewAvailableBroadcasts = () => {
  // Dummy data for available broadcasts
  const [availableBroadcasts] = useState([
    { id: 1, title: "Broadcast 1", category: "Sports" },
    { id: 2, title: "Broadcast 2", category: "Entertainment" },
    { id: 3, title: "Broadcast 3", category: "News" },
    { id: 4, title: "Broadcast 4", category: "Sports" },
  ]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">View Available Broadcasts</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Display available broadcasts */}
        <ul>
          {availableBroadcasts.map((broadcast) => (
            <li key={broadcast.id} className="border-b py-2">
              <div className="font-semibold">{broadcast.title}</div>
              <div className="text-gray-600">{broadcast.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewAvailableBroadcasts;
