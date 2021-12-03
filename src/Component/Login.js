import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {url} from '../App';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  // check if there is a user already logged in from  previous activity.
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate("/home/ac");
    }
  }, []);

  // login the user after login-form completion
  const handleSubmit = async e => {
    e.preventDefault();
    // send the id and password to the server
    axios.get(url+"/users", {
      params: {
        email: email,
        password: password
      }
    }).then((response) => {
      if(response.data.error === "") {
        // set the state of the user
        setUser(response.data.user_id);
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user_id));
        // go to homepage
        navigate("/home/ac");
      }
      else alert("Error: " + response.data.error);
    }).catch(error => {
      alert(error);
    });
  };

  const goRegister = () => {
    navigate("/register");
  }
;
  // if there's no user, show the login form
  return (
    <div className='card'>
      <div>
        Welcome to Event Manager!
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={email}
          placeholder="enter an ID"
          onChange={({ target }) => setEmail(target.value)}
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
