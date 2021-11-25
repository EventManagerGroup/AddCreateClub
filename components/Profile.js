import React from 'react';
import axios from 'axios';

function Profile(){

  return(
    <div className ='card'>
      <div>
        {localStorage.getItem("name")}
      </div>
      <div>
        Biography
      </div>
      <div>
        {localStorage.getItem("bio")}
      </div>
    </div>
  )
}

export default Profile;
