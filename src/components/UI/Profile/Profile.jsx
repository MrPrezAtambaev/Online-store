import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import OtdelNavbar from "../OtdelNavbar/OtdelNavbar";
import { useProducts } from "../../../context/ProductsContext";

const Profile = () => {
  const {
    avatarUrl,
    handleAvatarChange,
    handleSubmit,
    username,
    newUsername,
    handleNewUsernameChange,
    patchUsername,
  } = useProducts();

  const navigate = useNavigate("");
  return (
    <div style={{ color: "white" }}>
      <div className="container">
        <OtdelNavbar avatarUrl={avatarUrl} />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Profile</h2>
            <label htmlFor="username">Username</label> <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={username}
              readOnly
            />
            <br /> <br /> <br />
            <label htmlFor="new-username">New username</label> <br />
            <input
              type="text"
              name="new-username"
              id="new-username"
              placeholder=""
              value={newUsername}
              onChange={handleNewUsernameChange}
              required
            />
            <br />
            <br />
            <br />
            <label htmlFor="avatar">Avatar URL:</label>
            <br />
            <input
              type="text"
              id="avatar"
              value={avatarUrl}
              onChange={handleAvatarChange}
            />
            <br />
            <br />
            <br />
            <button
              type="submit"
              onClick={(() => navigate("/"), patchUsername)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
