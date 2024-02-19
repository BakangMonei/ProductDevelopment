import React, { useState } from "react";
import { connect } from "react-redux";
import { showPassword } from "../../../src/redux/actions/passwordActions";
import googleImage from "../../assets/images/google_image.png";
import facebookImage from "../../assets/images/facebook_image.png";

export const LoginPage = ({ showPasswordToggle, showPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg_image flex items-center justify-center min-h-screen ">
      <div className="login_container p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-4xl font-sans mb-1 text-center">Log In</h1>
        <h1 className="text-center font-thin mb-4">
          Don’t have an account?{" "}
          <a href="/RegistrationPage" className="text-black underline">
            Sign up
          </a>
        </h1>

        <div className="">
          <button className="rounded-3xl border-2 border-gray-500 flex items-center px-4 py-2 justify-center w-full mb-4 bg-white">
            <img
              src={facebookImage}
              alt="Facebook Icon"
              className="w-6 h-6 mr-2"
            />
            Log in with Facebook
          </button>
          <button className="rounded-3xl border-2 border-gray-500 flex justify-center items-center px-4 py-2 w-full mb-4 bg-white">
            <img src={googleImage} alt="Google Icon" className="w-6 h-6 mr-2" />
            Log in with Google
          </button>
        </div>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-500 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-500">
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
              className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium mb-1">
              Password
              {/* <button
                type="button"
                className="float-right text-gray-500 text-sm font-medium focus:outline-none hover:text-gray-700 transition duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button> */}
              <button
                type="button"
                className="float-right text-gray-500 text-sm font-medium focus:outline-none hover:text-gray-700 transition duration-200"
                onClick={() => showPassword()}
              >
                {showPasswordToggle ? "Hide" : "Show"}
              </button>
              {/* <button
                type="button"
                className="float-right text-gray-500 text-sm font-medium focus:outline-none hover:text-gray-700 transition duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <span>
                    Hide{" "}
                    <span role="img" aria-label="Close">
                      👀
                    </span>
                  </span>
                ) : (
                  <span>
                    Show{" "}
                    <span role="img" aria-label="Show">
                      👁️
                    </span>
                  </span>
                )}
              </button> */}
            </label>
            <input
              placeholder="Password"
              className="bg-transparent w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
              id="pass"
              type={showPasswordToggle ? "text" : "password"} // Use showPasswordToggle instead of showPassword
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-1 text-end">
            <p className="text-sm">
              <a
                href="/ForgotPassword"
                className="text-black font-sans underline"
              >
                Forgot Password?
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-3xl hover:bg-gray-800 transition duration-200"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  showPasswordToggle: state.password.showPassword,
});

export default connect(mapStateToProps, { showPassword })(LoginPage);
