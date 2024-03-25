// components/SideBar.js
import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import {
  FaUser,
  FaCog,
  FaVideo,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminNavbar = ({ broadcasterName }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 border-r">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="px-6 mt-10">
            <Link
              to="/AdminDashboard"
              className="flex items-center justify-start p-2 my-6 text-gray-600 transition-colors duration-200 hover:text-gray-800 bg-gray-50 dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#5e72e4"
                  d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                ></path>
              </svg>
              <span className="mx-4 font-normal text-md">Dashboard</span>
            </Link>
            <div>
              <p className="w-full pb-2 mb-4 ml-2 font-extrabold text-gray-300 border-b-2 border-gray-100 text-md">
                My Profile
              </p>

              <Link
                to="/Profile"
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <FaUser className="mr-2" />
                <span className="mx-4 font-normal text-md">
                  Open My Profile
                </span>
              </Link>
            </div>

            <div>
              <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md text-center">
                Manage Users & Broadcasters
              </p>
              <Link
                to=""
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <Link to="" className="flex items-center">
                  <FaUser className="mr-2" />
                </Link>
                <span className="mx-4 font-normal text-md">View As User</span>
              </Link>

              <Link
                to="/"
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <Link to="/uploaded-videos" className="flex items-center">
                  <FaVideo className="mr-2" />
                </Link>
                <span className="mx-4 font-normal text-md">
                  View My Uploaded Videos
                </span>
              </Link>
            </div>
            {/* Statistics & Analytics */}
            <div>
              <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                Statistics & Analytics
              </p>
              <Link
                to="/"
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <Link to="/contact-admins" className="flex items-center">
                  <FaEnvelope className="mr-2" />
                </Link>
                <span className="mx-4 font-normal text-md">Contact Admins</span>
              </Link>
              <Link
                to="/Settings"
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <FaCog className="mr-2" />
                <span className="mx-4 font-normal text-md">Settings</span>
              </Link>
              <Link
                to="/logout"
                className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <Link to="/logout" className="flex items-center">
          <FaSignOutAlt className="mr-2" />
        </Link>
                <span className="mx-4 font-normal text-md">Logout</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
