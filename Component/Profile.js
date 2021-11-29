import React from 'react';
import axios from 'axios';

function Profile(){

  return(
    <div className ='card'>
      <div>
        {JSON.parse(localStorage.getItem("name"))} (@{JSON.parse(localStorage.getItem("user"))})
      </div>
      <div>
        Biography
      </div>
      <div>
        {JSON.parse(localStorage.getItem("bio"))}
      </div>
    </div>
  )
}

export default Profile;
