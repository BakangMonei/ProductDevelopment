import React, { useState } from "react";

import { auth, firestore } from "../firebase"; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { registerAdmin } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { countries } from "countries-list";

const CreateAdmin = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastame] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sport, setSport] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const registrationState = useSelector(state => state.auth); // Assuming you have combined your reducers and authReducer is part of the state

  // Extracting countries from the countries-list package
  const countryOptions = Object.values(countries);

  // Lists
  const sports = ["Football", "Basketball", "Tennis", "Swimming", "Golf"];

  // State for validation and registration success
  const [validationError, setValidationError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Initialize useNavigate for redirection
  const navigate = useNavigate();

  const handleRegisterAdmin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if any required field is empty
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === "" ||
      sport.trim() === "" ||
      selectedCountry.trim() === "" ||
      phonenumber.trim() === "" 
    ) {
      // Validation error: Some fields are empty
      setValidationError(true);
      setRegistrationSuccess(false);
    } else {
      // Clear validation error if it was previously set
      setValidationError(false);

      // Check if the email is unique
      const emailExistsQuery = query(
        collection(firestore, 'admin'),
        where('email', '==', email)
      );
      const emailExistsSnapshot = await getDocs(emailExistsQuery);

      if (!emailExistsSnapshot.empty) {
        // Email already exists in the database
        setValidationError(true);
        setRegistrationSuccess(false);
        return;
      }

      try {
        // Create a new user with email and password
        await createUserWithEmailAndPassword(auth, email, password);

        // Create an object with the user's data (excluding password)
        const userData = {
          firstname,
          lastname,
          email,
          username,
          sport,
          selectedCountry,
          phonenumber,
        };
        

        // Add the user's data to Firestore
        const docRef = await addDoc(collection(firestore, "admin"), userData);

        if (docRef) {
          // Registration and Firestore data addition successful
          setRegistrationSuccess(true);

          // Redirect to the LoginPage
          navigate("/SuperAdminDashboard");
          dispatch(registerAdmin(userData));
        } else {
          console.error("Error adding user data to Firestore.");
          setRegistrationSuccess(false);
        }
      } catch (error) {
        console.error("Error registering user:", error);
        setRegistrationSuccess(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
        {validationError && (
            <p className="text-red-500 mb-2">
              Please fill out all required fields.
            </p>
          )}
          {registrationSuccess && (
            <p className="text-green-500 mb-2">Admin {email} Registered Successfully!</p>
          )}
      <form className="space-y-4" onSubmit={handleRegisterAdmin}>
        <h1 className="text-2xl font-semibold text-center">
          Create A Sport Admin
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
                  onChange={(e) => setEmail(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
                  onChange={(e) => setPassword(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="firstname" className="block">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
                  onChange={(e) => setLastame(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="phonenumber" className="block">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
                  onChange={(e) => setUsername(e.target.value)}
              className="border rounded text-black font-mono p-1 border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="selectedCountry" className="block">
              Country
            </label>
            <select
                  className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countryOptions.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
          </div>
          <div>
            <label htmlFor="sport" className="block">
              Sporting Code
            </label>
            <select
                  className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                >
                  <option value="">Select Sport</option>
                  {sports.map((sport, index) => (
                    <option key={index} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
