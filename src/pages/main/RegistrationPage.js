import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "countries-list"; // Corrected import statement
import Neiza from "../../assets/images/facebook_image.png";

export const RegistrationPage = () => {
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

  // Extracting countries from the countries-list package
  const countryOptions = Object.values(countries);

  // Lists
  const sports = ["Football", "Basketball", "Tennis", "Swimming", "Golf"];
  const genderM = ["Male", "Female", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg_image flex items-center justify-center min-h-screen">
      <div className="login_container grid grid-cols-3 gap-4 p-8 rounded-xl shadow-md w-full max-w-4xl">
        <div className="col-span-2">
          <h1 className="text-4xl font-sans mb-1 text-center">
            Create an account
          </h1>
          <h1 className="text-center font-thin mb-4">
            Already have an account?{" "}
            <a href="/LoginPage" className="text-black underline">
              Log in
            </a>
          </h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div>
                <label className="block text-sm font-medium mb-1">
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
                <label className="block text-sm font-medium mb-1">
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
                <label className="block text-sm font-medium mb-1">
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
                <label className="block text-sm font-medium mb-1">Sport</label>
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
                <label className="block text-sm font-medium mb-1">Gender</label>
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
                <label className="block text-sm font-medium mb-1">
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
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
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
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  value={repassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-3xl hover:bg-gray-800 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {/* Picture in the third column */}
          <img
            src={Neiza}
            alt="Registration Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
