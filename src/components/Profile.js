import React, { useState, useEffect } from "react";
import DummyImage from "../assets/images/neizatheedev.png";
import { auth, firestore } from "../firebase"; // Assuming this is the correct path to your firebase.js file


const Profile = () => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Firebase Auth listener to get the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setCurrentUser(user);
        
        // Fetch user details from each collection
        fetchUserDetails(user.uid);
      } else {
        // No user is signed in.
        setCurrentUser(null);
        setUserDetails(null);
      }
    });

    // Unsubscribe from the listener when component unmounts
    return unsubscribe;
  }, []);

  const fetchUserDetails = async (userId) => {
    try {
      // Fetch user details from each collection using user ID
      const userDetailsA = await fetchDetailsFromCollection(userId, "s_admin");
      const userDetailsB = await fetchDetailsFromCollection(userId, "admin");
      const userDetailsC = await fetchDetailsFromCollection(userId, "users");
      // const userDetailsD = await fetchDetailsFromCollection(userId, "collectionD");

      // Combine or merge user details from different collections
      const combinedUserDetails = {
        ...userDetailsA,
        ...userDetailsB,
        ...userDetailsC,
        // ...userDetailsD
        // Add more fields as needed
      };

      // Set user details state with the combined data
      setUserDetails(combinedUserDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchDetailsFromCollection = async (userId, collectionName) => {
    try {
      // Fetch user details from a specific collection
      const userDetailsRef = firestore.collection(collectionName).doc(userId);
      const userDetailsDoc = await userDetailsRef.get();
      if (userDetailsDoc.exists) {
        // Return user details if document exists
        return userDetailsDoc.data();
      } else {
        // Return null if document does not exist
        return null;
      }
    } catch (error) {
      console.error(`Error fetching user details from ${collectionName}:`, error);
      return null;
    }
  };

  if (!currentUser || !userDetails) {
    // User is not authenticated or user details not loaded, display a loading indicator or redirect to login page
    return <div>Loading...</div>;
  }

  return (
    <div className=" justify-center items-center"> 
      <section class="  h-screen bg-gray-100/50 justify-center items-center">
        <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
          <div class="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <a href="#" class="relative block">
                  <img
                    alt="profil"
                    src={DummyImage}
                    class="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                  
                </a>
                <h1 className="text-gray-600">{currentUser.displayName}</h1>
              </div>
            </div>
          </div>
          <div class="space-y-6 bg-white">
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-1/3">Account</h2>
              <div class="max-w-sm mx-auto md:w-2/3">
                <div class=" relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={currentUser.email}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-1/3">Personal info</h2>
              <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="FirstName"
                      value={currentUser.firstname}
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="LastName"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-1/3">Others</h2>
              <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Sport"
                    />
                  </div>
                </div>
                <div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Gender"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 class="max-w-sm mx-auto md:w-4/12">Change password</h2>
              <div class="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                <div class=" relative ">
                  <input
                    type="text"
                    id="user-info-password"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
                
              </div>
              <div class="text-center md:w-3/12 md:pl-6">
                <button
                  type="button"
                  class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Change
                </button>
              </div>
            </div>
            
            <hr />
            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;