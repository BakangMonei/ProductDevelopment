import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore, auth } from "../../firebase";
import SportsCard from "../Cards/SportsCard";

const UserFavorites = () => {
  const [favorites, setFavorites] = useState({});
  const [broadcasts, setBroadcasts] = useState([]);
  const userId = auth.currentUser.uid;

  useEffect(() => {
    fetchFavorites();
    fetchBroadcasts();
  }, [userId]);

  const fetchFavorites = async () => {
    const userFavCollection = collection(
      firestore,
      `user_fav/${userId}/favorites`
    );
    const favoritesSnapshot = await getDocs(userFavCollection);
    const favoritesData = {};
    favoritesSnapshot.forEach((doc) => {
      favoritesData[doc.id] = true;
    });
    setFavorites(favoritesData);
  };

  const fetchBroadcasts = async () => {
    const broadcastsCollection = collection(firestore, "broadcasts");
    const broadcastsSnapshot = await getDocs(broadcastsCollection);
    const broadcastsData = [];
    broadcastsSnapshot.forEach((doc) => {
      broadcastsData.push({ id: doc.id, ...doc.data() });
    });
    setBroadcasts(broadcastsData);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {broadcasts
          .filter((broadcast) => favorites[broadcast.id])
          .map((broadcast) => (
            <SportsCard
              key={broadcast.id}
              broadcast={broadcast}
              isFavorite={true}
            />
          ))}
      </div>
    </div>
  );
};

export default UserFavorites;
