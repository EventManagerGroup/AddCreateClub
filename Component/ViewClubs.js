import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export const ViewClubs = () => {
  let navigate = useNavigate();
  const clubArr = JSON.parse(localStorage.getItem("club"));

  function showClub(id) {
    navigate("/vclubs/" + id);
  }


  return (
    <div>
      {clubArr.map((club) => (
        <div className = "card">
          <a href="" onClick={() => showClub(club)}>{club}</a>
        </div>
      ))}
    </div>
  );
};

export default ViewClubs;
