import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, firestore } from "../../Database/firebase"; // Import auth and firestore from firebase.js
import {
  query,
  where,
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";


const UserProfileChangePasswordFor = () => {
    const { userId } = useParams();
  const [user, setUser] = useState({
    email: "",
    firstname: "",
    gender: "",
    lastname: "",
    phonenumber: "",
    selectedCountry: "",
    sport: "",
    username: "",
    notificationPreferences: "all",
  });
  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
  //     if (currentUser) {
  //       try {
  //         const q = query(
  //           collection(firestore, "users"),
  //           where("email", "==", currentUser.email)
  //         );
  //         const querySnapshot = await getDocs(q);
  //         if (querySnapshot.empty) {
  //           console.log("No matching documents found.");
  //           setUser(null);
  //         } else {
  //           const userData = querySnapshot.docs[0].data();
  //           setUser(userData);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user data: ", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div
  //         className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
  //         role="status"
  //       >
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // const handleEdit = () => {
  //   setEditing(true);
  // };

  /*************************************************************************************************/

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          const q = query(
            collection(firestore, "users"),
            where("email", "==", currentUser.email)
          );
          const querySnapshot = await getDocs(q);
          if (querySnapshot.empty) {
            console.log("No matching documents found.");
            setUser(null);
          } else {
            const userData = querySnapshot.docs[0].data();
            setUser(userData);
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSavePassword = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      // User not authenticated
      console.error("User not authenticated.");
      return;
    }

    if (user.newPassword && user.newPassword !== user.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      // Update user password
      await currentUser.updatePassword(user.newPassword);
      console.log("Password changed successfully.");
      // Password updated successfully
    } catch (error) {
      console.error("Error updating password: ", error.message);
      alert("Error changing password. Please try again later.");
      return;
    }

    try {
      // Update user data in Firestore
      const userRef = doc(firestore, "users", currentUser.uid);
      await updateDoc(userRef, user);
      console.log("User data updated successfully.");
      // User data updated successfully
    } catch (error) {
      console.error("Error updating user data: ", error.message);
      alert("Error updating user data. Please try again later.");
    }
  };

  const handleDeleteAccount = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      // User not authenticated
      console.error("User not authenticated.");
      return;
    }

    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        // Delete user document from Firestore
        await deleteDoc(doc(firestore, "users", currentUser.uid));
        // Delete user from Firebase Authentication
        await currentUser.delete();
        console.log("User account deleted successfully.");
        // Optionally redirect the user or show a message after successful deletion
      } catch (error) {
        console.error("Error deleting user: ", error.message);
        alert("Error deleting user. Please try again later.");
        // Handle error gracefully, show an error message to the user
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
    return (
        <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Password
                    </h3>
                </div>

                <div className="p-7">
                    <form>
                        <div className="mb-5.5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="currentPassword"
                            >
                                Current Password
                            </label>
                            <input
                                className="pl-4 w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                                placeholder="Current Password"
                                value={user.currentPassword}
                            />
                        </div>

                        <div className="mb-5.5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="newPassword"
                            >
                                New Password
                            </label>
                            <input
                                className="pl-4 w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                placeholder="New Password"
                                value={user.newPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-5.5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="pl-4 w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={user.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex justify-end gap-4.5 mt-3 space-x-2">
                            <button
                                className="flex justify-center bg-red-500 rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white"
                                type="button"
                                onClick={handleDeleteAccount}
                            >
                                Delete Account
                            </button>
                            <button
                                className="flex justify-center bg-red-500 rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark dark:text-white"
                                type="submit"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex justify-center rounded bg-blue-500 py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                type="submit"
                                onClick={handleSavePassword}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default UserProfileChangePasswordFor;