import React, { useState } from "react";

import { auth, firestore } from "../../firebase"; // Import Firebase Auth and Firestore
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { registerAdmin } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { countries } from "countries-list";
import SuperAdminNavBar from "../NavBars/SuperAdminNavBar";

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
  const registrationState = useSelector((state) => state.auth); // Assuming you have combined your reducers and authReducer is part of the state

  const [generatedPassword, setGeneratedPassword] = useState("");

  // Extracting countries from the countries-list package
  const countryOptions = Object.values(countries);

  // Lists
  const sports = ["Swimming", "Athletics", "Gymnastics", "Cycling", "Basketball", "Football", "Tennis", "Boxing", "Rowing", "Diving", "Wrestling", "Sailing", "Archery", "Equestrian", "Triathlon", "Volleyball", "Handball", "Table Tennis", "Taekwondo", "Canoeing", "Fencing", "Shooting", "Badminton", "Rhythmic Gymnastics", "Weightlifting", "Hockey", "Rugby Sevens", "Synchronized Swimming", "Water Polo", "Modern Pentathlon"];


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
      username.trim() === "" ||
      sport.trim() === "" ||
      selectedCountry.trim() === "" ||
      phonenumber.trim() === ""
    ) {
      // Validation error: Some fields are empty
      setValidationError(true);
      setRegistrationSuccess(false);
      return;
    }

    // Generate a random password for the new admin
    const generatedPassword = generateRandomPassword();
    setGeneratedPassword(generatedPassword); // Set the generated password in the state

    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, generatedPassword);

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

        // Set the generated password in the state
        setGeneratedPassword(generatedPassword);

        // Send password reset email to the new admin
        await sendPasswordResetEmail(auth, email);

        // Display confirmation dialog
        const confirmed = window.confirm(
          `Admin [${email}] created successfully. \nGenerated Password: ${generatedPassword}. \nDo you want to proceed to SuperAdminDashboard?`
        );

        // If user confirms, navigate to SuperAdminDashboard
        if (confirmed) {
          navigate("/SuperAdminDashboard");
          dispatch(registerAdmin(userData));
        } else {
          // Handle other actions if user cancels
          // For example, reset form fields
          setFirstname("");
          setLastame("");
          setEmail("");
          setUsername("");
          setSport("");
          setSelectedCountry("");
          setPhonenumber("");
          setGeneratedPassword("");
          setValidationError(false);
          setRegistrationSuccess(false);
        }
      } else {
        console.error("Error adding user data to Firestore.");
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setRegistrationSuccess(false);
    }
  };

  // Function to generate a random password
  const generateRandomPassword = () => {
    // Generate a random alphanumeric password
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const passwordLength = 10;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  };

  return (
    <div className="flex flex-auto">
      <div>
        <SuperAdminNavBar />
      </div>
      <div className=" flex min-h-screen  max-w-3xl mx-auto p-4 justify-center items-center">
        <div className="login_container  items-center justify-center grid grid-cols-2 gap-4 p-8 rounded-xl shadow-md w-full max-w-4xl">
          <div className="col-span-2">
            <h1 className="text-2xl font-semibold text-center mb-4">
              Create An Admin
            </h1>
            {validationError && (
              <p className="text-red-500 mb-2 text-center">
                Please fill out all required fields.
              </p>
            )}
            <form onSubmit={handleRegisterAdmin}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
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
                    placeholder="Generated Password"
                    value={generatedPassword} // Display the autogenerated password
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    disabled // Disable the input field to prevent editing
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
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
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
                    placeholder="Last Name"
                    onChange={(e) => setLastame(e.target.value)}
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
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
                    placeholder="Phone Number"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
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
                    placeholder="UserName"
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
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
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Create Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
