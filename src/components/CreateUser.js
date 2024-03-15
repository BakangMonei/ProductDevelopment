import React, { useState } from "react";

import { countries } from "countries-list";

import { auth, firestore } from "../firebase"; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authActions";

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



};

export default CreateUser;
