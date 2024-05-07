import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, firestore, storage } from "../../firebase"; // Import your firebase instances

function CreatePost() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [image, setImage] = useState(null); // Add a state for the image
  const [imageUrl, setImageUrl] = useState(""); // Add a state for the image URL

  useEffect(() => {
    // Fetch posts from Firestore and subscribe to updates
    const fetchData = async () => {
      const q = query(
        collection(firestore, "posts"),
        orderBy("timestamp", "desc")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setPosts(data);
      });
      return unsubscribe;
    };

    fetchData();

    // Listen for auth state changes and fetch user data
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const q = query(
          collection(firestore, "users"),
          where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log("No matching documents found.");
          setCurrentUser(null);
        } else {
          const userData = querySnapshot.docs[0].data();
          setCurrentUser(userData);
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPostContent.trim() === "") return;

    try {
      // Upload image to Firebase Storage
      if (image) {
        const imageRef = ref(storage, `posts/${image.name}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);
        setImageUrl(imageUrl);
      }

      // Add post to Firestore
      await addDoc(collection(firestore, "posts"), {
        content: newPostContent,
        timestamp: new Date(),
        user: currentUser
          ? `${currentUser.firstname} ${currentUser.lastname}`
          : "Unknown",
        image: imageUrl, // Add image URL to post document
      });
      setNewPostContent("");
      setImage(null);
      setImageUrl("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Post form */}
      <form onSubmit={handlePostSubmit} className="mb-4">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <input type="file" onChange={handleImageChange} />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Post
        </button>
      </form>

      {/* Display posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-gray-300 rounded-md p-4 mb-4"
        >
          <p className="text-lg font-semibold mb-2">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post image" className="w-full mb-2" />
          )}
          <p className="text-gray-500">Posted by: {post.user}</p>
          <p className="text-gray-500">
            {post.timestamp.toDate().toLocaleString()}
          </p>
          {post.image && <p className="text-gray-500">Image: {post.image}</p>}
        </div>
      ))}
    </div>
  );
}

export default CreatePost;
