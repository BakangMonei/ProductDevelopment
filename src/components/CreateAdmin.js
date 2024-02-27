import React, { useState } from "react";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    sportingCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to backend
    console.log("Form Data:", formData);
    // Reset form after submission
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      username: "",
      sportingCode: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
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
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
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
            value={formData.username}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="sportingCode" className="block">
            Sporting Code
          </label>
          <input
            type="text"
            id="sportingCode"
            name="sportingCode"
            value={formData.sportingCode}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 text-white py-2 px-4 rounded"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
