// Done [Working Vety Well]
import React, { useState } from 'react';


const ViewUsersUpdate = ({ user, onUpdate, onClose }) => {
    const [updatedUser, setUpdatedUser] = useState({
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        selectedCountry: user.selectedCountry,
        phonenumber: user.phonenumber,
        username: user.username,
        gender: user.gender,
        sport: user.sport,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Call the onUpdate function passed as a prop to update the user
        onUpdate(updatedUser);
        onClose(); // Close the modal
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-40 z-50">
            <div className="bg-white w-96 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={updatedUser.email}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Username:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={updatedUser.username}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={updatedUser.firstname}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={updatedUser.lastname}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Country:</label>
                    <input
                        type="text"
                        name="location"
                        value={updatedUser.selectedCountry}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={updatedUser.phonenumber}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Gender:</label>
                    <input
                        type="text"
                        name="companyType"
                        value={updatedUser.gender}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Sport:</label>
                    <input
                        type="text"
                        name="category"
                        value={updatedUser.sport}
                        onChange={handleChange}
                        className="w-full border rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        // onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewUsersUpdate;