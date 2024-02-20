import React, { useState } from "react";
import { connect } from "react-redux";
import { sendPasswordResetEmail } from "../../redux/actions/authActions";

export const ForgotPassword = ({ sendPasswordResetEmail }) => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSend = () => {
    if (email.trim() === "") {
      setValidationError(true);
      setEmailSent(false);
    } else {
      setValidationError(false);
      sendPasswordResetEmail(email); // Dispatch the action
      setEmailSent(true);
    }
  };

  return (
    <div className="bg_image flex items-center justify-center min-h-screen ">
      <div className="login_container p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-4xl font-sans mb-1 text-center">Forgot Password</h1>
        <h1 className="text-center font-thin mb-8">
          Don’t have an account?{" "}
          <a href="/RegistrationPage" className="text-black underline">
            Sign up
          </a>
        </h1>

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

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-3xl hover:bg-gray-800 transition duration-200"
            onClick={handleSend}
          >
            Send Link
          </button>

          <div className="mb-4 mt-1 text-start">
            <p className="text-sm">
              <a href="/LoginPage" className="text-black font-sans underline">
                Log in instead
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default connect(null, { sendPasswordResetEmail })(ForgotPassword);