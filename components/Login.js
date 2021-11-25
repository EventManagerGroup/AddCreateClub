import React, { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setID("");
    setPassword("");
    localStorage.clear();
    {window.location.pathname = ''};
  };

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
    {window.location.pathname = "/ac"};
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div className='card'>
        {localStorage.getItem("name")} is logged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  // if there's no user, show the login form
  return (
    <div className='card'>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
