import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function CreateClub(props){
  const [clubID, setClubID] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubDesc, setClubDesc] = useState("");
  const [clubAdd, setClubAdd] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/clubs", {
      id: clubID,
      name: clubName,
      description: clubDesc,
      addCode: clubAdd,
      member: [{id:JSON.parse(localStorage.getItem("user")), rank: "founder"}]
    });
    navigate("/vclubs/" + clubID);
  };


  return (
    <div className='modal'>
      <div>
        <p>Create Club</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clubID">Club ID: </label>
          <input
            type="text"
            value={clubID}
            placeholder="enter a club ID"
            onChange={({ target }) => setClubID(target.value)}
            />
        </div>
        <div>
        <label htmlFor="clubName">Club Name: </label>
        <input
          type="text"
          value={clubName}
          placeholder="enter your club name"
          onChange={({ target }) => setClubName(target.value)}
          />
        </div>
        <div>
        <label htmlFor="clubDesc">Club Description: </label>
        <input
          type="text"
          value={clubDesc}
          placeholder="enter your club description"
          onChange={({ target }) => setClubDesc(target.value)}
          />
        </div>
        <div>
        <label htmlFor="clubAdd">Club Add-code: </label>
        <input
          type="text"
          value={clubAdd}
          placeholder="enter your club add-code"
          onChange={({ target }) => setClubAdd(target.value)}
          />
        </div>
        <button type ="submit">Enter</button>
      </form>
    </div>
  );
}

export default CreateClub;
