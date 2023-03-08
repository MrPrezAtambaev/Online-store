import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const { register, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };

  const [formData, setFormData] = useState({
    // other form fields
    isAdmin: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    // Save isAdmin value to local storage if checkbox is checked
    if (formData.isAdmin) {
      localStorage.setItem("admin", true);
    } else {
      localStorage.setItem("admin", false);
    }
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            placeholder="Password Confirmation"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password confirmation</label>
        </div>
        <div className="user-box">
          <input
            type="checkbox"
            checked={formData.isAdmin}
            name="isAdmin"
            onChange={(e) => {
              setAdmin(e.target.checked);
              handleSubmit2(e);
              handleInputChange(e);
            }}
          />
          <label>Admin</label>
        </div>
        <button onClick={() => register(username, password)}>
          Register
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
