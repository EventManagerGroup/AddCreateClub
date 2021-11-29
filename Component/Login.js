import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

export const Login = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = {id, password};
    // send the id and password to the server
    const response = await axios.get("http://localhost:3001/users/", {
      params: {
        id: user.id,
        password: user.password
      }
    });
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data[0].id));
    localStorage.setItem("name", JSON.stringify(response.data[0].name));
    localStorage.setItem("bio", JSON.stringify(response.data[0].bio));
    localStorage.setItem("club", JSON.stringify(response.data[0].club));
    navigate("/ac");
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div>
      </div>
    );
  }

  // to make a new account
  const goRegister = () => {
    window.location.pathname = '/register';
  };

  // if there's no user, show the login form
  return (
    <div className='card'>
      <div>
        Welcome to Event Manager!
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID: </label>
        <input
          type="text"
          value={id}
          placeholder="enter an ID"
          onChange={({ target }) => setID(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className='btn btn--alt' type="submit">Login</button>
        <button className='btn btn--alt' onClick = {goRegister}>Register Now</button>
      </form>
    </div>
  );
};

export default Login;
