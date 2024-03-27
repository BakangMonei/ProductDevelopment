// components/EditBroadcast.js

import React, { useState } from "react";

const EditBroadcast = () => {
  // State variables for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, like updating broadcast information
    console.log("Form submitted with data:", { title, description, category });
    // Reset form fields
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Broadcast</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4"
      >
        {/* Title input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        {/* Description input */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="border rounded py-2 px-3 w-full h-32 resize-none"
          />
        </div>
        {/* Category input */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold mb-2"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="border rounded py-2 px-3 w-full"
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBroadcast;
