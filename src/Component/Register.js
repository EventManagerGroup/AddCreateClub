import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {url} from '../App';

function Register(){
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  // send form to server to create account
  const handleSubmit = async e =>{
    e.preventDefault();
    const response = await axios.post(url + "/users", {
      params: {
        first_name: fName,
        last_name: lName,
        email: email,
        password: pw
      }

    }).then( response => {
      if(response.error == ""){
        alert("Account Creation Successful!");
        navigate("/");
      }
      else{
        alert("Error: " + response.error)
      }
    }).catch( error => {
      alert(error)
    })
  };

  return (
    <div className='modal'>
      <div>
        <p>Create Account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fn">First Name: </label>
          <input
            type="text"
            value={fName}
            placeholder="enter your first name"
            onChange={({ target }) => setFName(target.value)}
            />
        </div>
        <div>
          <label htmlFor="ln">Last Name: </label>
          <input
            type="text"
            value={lName}
            placeholder="enter your last name"
            onChange={({ target }) => setLName(target.value)}
            />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={({ target }) => setEmail(target.value)}
            />
        </div>
        <div>
          <label htmlFor="pw">Password: </label>
          <input
            type="text"
            value={pw}
            placeholder="enter a user password"
            onChange={({ target }) => setPw(target.value)}
            />
        </div>
        <button className='btn btn--alt' type ="submit">Enter</button>
      </form>
      <button className='btn btn--alt' onClick = {() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Register;
