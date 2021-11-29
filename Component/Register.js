import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Register(){
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/users", {
      id: userID,
      password: userPW,
      name: userName,
      bio: userBio,
      club: []
    });
    alert("Account creation successful!")
    navigate("/");
  };

  function goLogin(){
    navigate("/");
  }

  return (
    <div className='modal'>
      <div>
        <p>Create Account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            value={userID}
            placeholder="enter a user ID"
            onChange={({ target }) => setUserID(target.value)}
            />
        </div>
        <div>
          <label htmlFor="pw">Password: </label>
          <input
            type="text"
            value={userPW}
            placeholder="enter a user password"
            onChange={({ target }) => setUserPW(target.value)}
            />
        </div>
        <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={userName}
          placeholder="enter your username"
          onChange={({ target }) => setUserName(target.value)}
          />
        </div>
        <div>
        <label htmlFor="bio">Biography: </label>
        <input
          type="text"
          value={userBio}
          placeholder="enter your club description"
          onChange={({ target }) => setUserBio(target.value)}
          />
        </div>
        <button className='btn btn--alt' type ="submit">Enter</button>
        <button className='btn btn--alt' onClick = {goLogin}>Go Back</button>
      </form>
    </div>
  );
}

export default Register;
