// SportsCard.js
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase"; // Import your firebase configuration

const VideoPlayer = ({ videoURL }) => {
  return (
    <div className="mt-4">
      <video
        width="100%"
        height="100%"
        controls
        src={videoURL}
        className="rounded-md"
      />
    </div>
  );
};

const FavoriteButton = ({ broadcastId, isFavorite, onToggleFavorite }) => {
  return (
    <button
      className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ${
        isFavorite ? "bg-green-500" : ""
      }`}
      onClick={() => onToggleFavorite(broadcastId)}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

const CommentSection = ({ broadcastId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    // Add comment logic here
  };

  return (
    <div className="mt-4">
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

const SportsCard = () => {
  const [broadcasts, setBroadcasts] = useState([]);
  const [editingBroadcast, setEditingBroadcast] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBroadcasts = async () => {
    const broadcastsCollection = collection(firestore, "broadcasts");
    const broadcastsSnapshot = await getDocs(broadcastsCollection);
    const broadcastsData = [];
    broadcastsSnapshot.forEach((doc) => {
      broadcastsData.push({ id: doc.id, ...doc.data() });
    });
    setBroadcasts(broadcastsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchBroadcasts();
  }, []);

  const handleToggleFavorite = async (broadcastId) => {
    // Add favorite toggle logic here
  };

  return (
    <div className="flex">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {broadcasts.map((broadcast) => (
            <div
              key={broadcast.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <VideoPlayer videoURL={broadcast.videoURL} />
              <h2 className="text-lg font-semibold mb-2">
                {broadcast.sportName}
              </h2>
              <h3 className="text-sm font-mono mb-2">
                {broadcast.description}
              </h3>
              <p>title: {broadcast.title}</p>
              <p>Date & Time: {broadcast.dateTime}</p>
              <p>Venue: {broadcast.venue}</p>
              <p>Country: {broadcast.country}</p>

              <div className="mt-4 space-x-2">
                <FavoriteButton
                  broadcastId={broadcast.id}
                  // isFavorite={/* check if broadcast is favorite */}
                  onToggleFavorite={handleToggleFavorite}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => setEditingBroadcast(broadcast.id)}
                >
                  Add Comment
                </button>
              </div>

              {editingBroadcast === broadcast.id && (
                <CommentSection broadcastId={broadcast.id} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
