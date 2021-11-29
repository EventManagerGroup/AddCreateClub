import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

function AddClub(props){
  const [aCode, setACode] = useState("");
  const [clubName, setClubName] = useState("");
  var clubArr = JSON.parse(localStorage.getItem("club"));

  const handleSubmit = async e =>{
    e.preventDefault();
    //match add-code with existing club
    const response = await axios.get("http://localhost:3001/clubs/", {
      params:{
        addCode: aCode
      }
    });
    setClubName(response.data[0].id);
    // add clubname to array

    //BACKEND - Implement patch request to user's club array to patch in clubName.

  };

  return (
    <div className='modal'>
      <div>
        <p>Add Club</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addCode">Enter the add-code: </label>
        <input
          type="text"
          value={aCode}
          placeholder="enter your add-code"
          onChange={({ target }) => setACode(target.value)}
        />
        <button type ="submit">Enter</button>
      </form>
      <button className='btn btn--alt' onClick={props.onCancel}>Go Back</button>
    </div>
  );
}

export default AddClub;
