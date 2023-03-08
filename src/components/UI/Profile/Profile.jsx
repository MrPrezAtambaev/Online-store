import React, { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");

  const handleInp = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    console.log(username);
  };

  function patchUsername() {
    let user = localStorage.getItem("username");
    if (username != "") {
      user = username;
      console.log(user);
    }
  }

  return (
    <div style={{ color: "white" }}>
      <form>
        <input type="text" />

        <label htmlFor="">New Username</label>
        <input onChange={handleInp} type="text" />
      </form>
      <button onClick={patchUsername}> Putch </button>
    </div>
  );
};

export default Profile;
