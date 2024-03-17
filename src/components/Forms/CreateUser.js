import React, { useState } from "react";

import { countries } from "countries-list";

import { auth, firestore } from "../../firebase"; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import SuperAdminNavBar from "../NavBars/SuperAdminNavBar";

const CreateUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastame] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const registrationState = useSelector((state) => state.auth); // Assuming you have combined your reducers and authReducer is part of the state

  const [generatedPassword, setGeneratedPassword] = useState("");
  const [generatedConfirmPassword, setGeneratedConfirmPassword] = useState("");

  // Extracting countries from the countries-list package
  const countryOptions = Object.values(countries);

  // Lists
  const sports = ["Football", "Basketball", "Tennis", "Swimming", "Golf"];
  const genderM = ["Male", "Female", "Other"];
  // State for validation and registration success
  const [validationError, setValidationError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Initialize useNavigate for redirection
  const navigate = useNavigate();

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
              Create A User
            </h1>
            
            {validationError && (
              <p className="text-red-500 mb-2">
                Please fill out all required fields.
              </p>
            )}
            {registrationSuccess && (
              <p className="text-green-500 mb-2">Registered Successfully!</p>
            )}
            <form >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                <div>
                  <label className="block">
                    FirstName
                  </label>
                  <input
                    type="text"
                    placeholder="FirstName"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label className="block">
                    LastName
                  </label>
                  <input
                    type="text"
                    placeholder="LastName"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={lastname}
                    onChange={(e) => setLastame(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">
                    Sport
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
                <div>
                  <label className="block">
                    Gender
                  </label>
                  <select
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    {genderM.map((gender, index) => (
                      <option key={index} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block">
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
                  <label className="block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled
                  />
                </div>
                <div>
                  <label className="block">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                    value={repassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
