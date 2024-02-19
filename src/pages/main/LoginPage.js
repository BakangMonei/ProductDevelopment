import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import googleImage from "../../assets/images/google_image.png";
import facebookImage from "../../assets/images/facebook_image.png";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-4xl font-sans mb-1 text-center">Log In</h1>
        <h1 className="text-center font-thin mb-4">
          Don’t have an account?{" "}
          <a href="/SignUpPage" className="text-black underline">
            Sign up
          </a>
        </h1>

        <div className="">
          <button className="rounded-3xl border-2 flex items-center px-4 py-2 justify-center w-full mb-4">
            <img
              src={facebookImage}
              alt="Facebook Icon"
              className="w-6 h-6 mr-2"
            />
            Log in with Facebook
          </button>
          <button className="rounded-3xl border-2 flex justify-center items-center px-4 py-2 w-full mb-4">
            <img src={googleImage} alt="Google Icon" className="w-6 h-6 mr-2" />
            Log in with Google
          </button>
        </div>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-gray-500 dark:text-white">
            OR
          </p>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              id="pass"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-end justify-end space-x-2">
              <label className="font-sans space-x-2" htmlFor="check">
                Show Password
                <input
                  id="check"
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/RegisterPage" className="text-blue-500 font-bold">
              Register
            </a>
          </p>
          <p className="text-sm">
            <a href="/ForgotPassword" className="text-blue-500 font-bold">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;