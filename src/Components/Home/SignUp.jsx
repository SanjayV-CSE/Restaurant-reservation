import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import UserProfile from "./UserProfile";

const SignUpModal = ({ isOpen, onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData to the parent component for signup handling
    onSignUp(formData);
    // Reset form data after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="sign-up-modal-title"
      aria-describedby="sign-up-modal-description"
    >
      <Box>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
          <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData to the parent component for login handling
    onLogin(formData);
    // Reset form data after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
          <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

const LoginSignUpPopup = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const handleSignUp = (formData) => {
    // Handle signup data, e.g., store in database
    console.log("Signup Data:", formData);
    // Close signup modal after signup
    setIsSignUpOpen(false);
    // Open login modal after signup
    setIsLoginOpen(true);
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLogin = (formData) => {
    // Handle login data, e.g., validate credentials
    console.log("Login Data:", formData);
    // Close login modal after login
    setIsLoginOpen(false);
  };

  return (
    <div className="space-x-2">
      <Button
        variant="contained"
        sx={{
          bgcolor: "#4D4D4D",
          color: "white",
          "&:hover": {
            bgcolor: "#4D4D4D",
            color: "white",
          },
        }}
        onClick={handleSignUpOpen}
      >
        Sign Up
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#4D4D4D",
          color: "white",
          "&:hover": {
            bgcolor: "#4D4D4D",
            color: "white",
          },
        }}
        onClick={handleLoginOpen}
      >
        Login
      </Button>

      <SignUpModal isOpen={isSignUpOpen} onClose={handleSignUpClose} onSignUp={handleSignUp} />
      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} onLogin={handleLogin} />
    </div>
  );
};

export default LoginSignUpPopup;
