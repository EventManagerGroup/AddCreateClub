import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {url} from '../App';
import PromoteGenMember from './Component2/PromoteGenMember';
import Backdrop from './Component2/Backdrop';

export const ViewClubs = () => {
  const [filter, setFilter] = useEffect("");
  const [clubArr, setClubArr] = useEffect([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getClubs(){
      const response = await axios.get(url+"/club", {
        params:{
          user_id: JSON.parse(localStorage.getItem("user")),
          filter: filter
        }
      }).then(response => {
        if (response.error == "") setClubArr(response.club_list);
        else {  // display error, then go to previous page
          alert("Error: " + response.error);
          navigate(-1);
        }
      }).catch(error => {
        alert(error);
      })
    }
  })

  // navigate to view events of particular club
  function goClubEvents(club) {
    navigate("/clubs/" + club.id + "/events");
  }

  // navigate to view events of particular club
  function goClubAnnouncements(club) {
    navigate("/clubs/" + club.id + "/announcements");
  }

  const handleSelect = (e) => {
    setFilter(e.target.value);
  }

  // used for promoting a general member -> board member
  const [promoteMemOpen, setPromoteMemOpen] = useState(false);
  function openPromoteMem(){
    setPromoteMemOpen(true);
  }
  function closePromoteMem(){
    setPromoteMemOpen(false);
  }

  return (
    <div>
      <form>
        <label htmlFor="filter">Search by name: </label>
        <input
          type="text"
          value={filter}
          placeholder="search club by name"
          onChange={({ target }) => setFilter(target.value)}
        />
        <button type ="submit">Enter</button>
      </form>
      {clubArr.map((club) => (
        <div className = "card">
          {club.name} (@{club.club_id})
          <div>
            <button className='btn btn--alt' onClick={() => goClubEvents(club)}> View Events </button>
            <button className='btn btn--alt' onClick={() => goClubAnnouncements(club)}> View Events </button>
          </div>
          <div>
            <div>
              Description
            </div>
            <div>
              {club.description}
            </div>
          </div>
          <div>
            <div>
              Board Members
            </div>
            <div>
              {club.board_members.map(member => <p>{member}</p>)}
            </div>
          </div>
          <div>
            <div>
              General Members
            </div>
            <div>
              {club.general_members.map(member => <p>{member}</p>)}
            </div>
            <div className ='actions'>
              <button className='btn' onClick={openPromoteMem}>Promote Member</button>
            </div>
            {promoteMemOpen && <PromoteGenMember onCancel={closePromoteMem}/>}
            {promoteMemOpen && <Backdrop onCancel={closePromoteMem}/>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewClubs;
