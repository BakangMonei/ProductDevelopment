import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { firestore, auth } from "../../firebase";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Carousel,
} from "@material-tailwind/react";

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
  const [broadcasts1, setBroadcasts1] = useState([]);
  const [editingBroadcast1, setEditingBroadcast1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const [favorites, setFavorites] = useState({}); // keep track of favorite broadcasts

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
    const userId = auth.currentUser.uid;
    const userFavCollection = collection(
      firestore,
      `user_fav/${userId}/favorites`
    );
    const broadcastRef = doc(userFavCollection, broadcastId);

    const docSnapshot = await getDoc(broadcastRef);
    const isFavorite = docSnapshot.exists();

    if (isFavorite) {
      // Remove from favorites
      await deleteDoc(broadcastRef);
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [broadcastId]: false,
      }));
    } else {
      // Add to favorites
      await setDoc(broadcastRef, { broadcastId: broadcastId });
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [broadcastId]: true,
      }));
    }
  };

  return (
    <div className="t-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black"
        >
          <Typography variant="h6" color="white">
            High Jump
          </Typography>
        </CardHeader>
        <Carousel>
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
                      isFavorite={favorites[broadcast.id] || false}
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
        </Carousel>
      </Card>

      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black"
        >
          <Typography variant="h6" color="white">
            Long Jump
          </Typography>
        </CardHeader>
        <Carousel>
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
                      isFavorite={favorites[broadcast.id] || false}
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
        </Carousel>
      </Card>
    </div>
  );
};

export default SportsCard;
