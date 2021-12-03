import {useParams, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnnouncementMaker from './Component2/AnnouncementMaker';
import Backdrop from './Component2/Backdrop';
import {url} from '../App';


export const ViewClubAnnouncements = () => {
  let navigate = useNavigate();
  let {clubID} = useParams();
  //club's event parameters
  const [annos, setAnnos] = useState([]);
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState("");


  useEffect(() => {
    async function getEvents(){
      const response = await axios.get(url+"/announcement", {
        params:{
          user_id: JSON.parse(localStorage.getItem("user")),
          club_id: clubID,
          filter: filter,
          limit: limit
        }
      }).then(resposne => {
        if (response.error == "") setAnnos(response.announcements_list);
        else alert("Error: " + response.error);
      }).catch (error => {
        alert(error);
        navigate(-1);
      });
    };
    getEvents();
  }, [])

  // used to create an event
  const[annoMakerOpen, setAnnoMakerOpen] = useState(false);
  function openAnnoMaker(){
    setAnnoMakerOpen(true);
  }
  function closeAnnoMaker(){
    setAnnoMakerOpen(false);
  }

  return (
    <div>
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
        </div>
        <div>
          <form>
            <label htmlFor="limit">Change viewing limit: </label>
            <input
              type="text"
              value={limit}
              placeholder="change the viewing limit"
              onChange={({ target }) => setLimit(target.value)}
              />
            <button type ="submit">Enter</button>
          </form>
        </div>
        <div>
          <p>{clubID}'s Announcements:</p>
        </div>
        <div className='actions'>
          <button className='btn' onClick={openAnnoMaker}>Create an Announcement</button>
        </div>
        {annoMakerOpen && <AnnouncementMaker onCancel={closeAnnoMaker}/>}
        {annoMakerOpen && <Backdrop onCancel={closeAnnoMaker}/>}
        <div>
          {annos.map((anno) => (
            <div className = "card">
              <p>{anno.title} (@{anno.announcement_id})</p>
              <p>From {anno.club_id} @ {anno.date_generated}</p>
              <p> {anno.description} </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ViewClubAnnouncements;
