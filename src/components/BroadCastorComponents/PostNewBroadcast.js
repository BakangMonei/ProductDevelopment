import React, { useState } from "react";
import { countries } from "countries-list";
import { firestore } from "../../Database/firebase"; 
import { collection, addDoc } from "firebase/firestore";

const PostNewBroadcast = () => {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [sportName, setSportName] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");

  const [validationError, setValidationError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Works
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (
      title.trim() === "" ||
      dateTime.trim() === "" ||
      sportName.trim() === "" ||
      venue.trim() === "" ||
      selectedCountry.trim() === "" ||
      description.trim() === "" ||
      videoURL.trim() === ""
    ) {
      // Validation error: Some fields are empty
      setValidationError(true);
      setRegistrationSuccess(false);
      return;
    }

    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(firestore, "broadcasts"), {
        title: title,
        dateTime: dateTime,
        sportName: sportName,
        venue: venue,
        country: selectedCountry,
        description: description,
        videoURL: videoURL,
      });
      console.log("Document written with ID: ", docRef.id);
      setRegistrationSuccess(true);
      setValidationError(false);

      // Clear input fields after successful submission
      setTitle("");
      setDateTime("");
      setSportName("");
      setVenue("");
      setSelectedCountry("");
      setDescription("");
      setVideoURL("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setRegistrationSuccess(false);
      setValidationError(true);
    }
  };

  // Extracting countries from the countries-list package
  const countryOptions = Object.values(countries);

  return (
    <div className="container mx-auto mt-5 border border-black rounded p-10">
      <h1 className="text-2xl font-semibold mb-5 text-center">Post New Broadcast</h1>
      {registrationSuccess && (
        <p className="text-green-600">Broadcast successfully posted!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="dateTime" className="block mb-1">
            Time and Date
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="sportName" className="block mb-1">
            Sport Name
          </label>
          <input
            type="text"
            id="sportName"
            value={sportName}
            onChange={(e) => setSportName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="venue" className="block mb-1">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block mb-1">
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
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="videoURL" className="block mb-1">
            Video URL
          </label>
          <input
            type="text"
            id="videoURL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostNewBroadcast;
