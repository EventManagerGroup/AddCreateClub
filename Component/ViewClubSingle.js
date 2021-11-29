import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventMaker from './EventMaker';
import Backdrop from './Backdrop';

export const ViewClubSingle = () => {
  let {id} = useParams();
  const [clubID, setClubID] = useState();
  const [clubName, setClubName] = useState("");
  const [clubDesc, setClubDesc] = useState("");
  const [clubEvent, setClubEvent] = useState([]);

  // used for event-making modal
  const [eventMakerOpen, setEventMakerOpen] = useState(false);
  function openEventMaker(){
    setEventMakerOpen(true);
  }
  function closeEventMaker(){
    setEventMakerOpen(false);
  }

  useEffect(() => {
    async function getClub(){
      const response = await axios.get("http://localhost:3001/clubs/", {
        params:{
          id: id
        }
      });
      setClubID(response.data[0].id);
      setClubName(response.data[0].name);
      setClubDesc(response.data[0].description);
      setClubEvent(response.data[0].event);
      localStorage.setItem("butt", JSON.stringify(response.data[0].event));
      alert(clubEvent);
    };
    getClub();
  }, [])

  return (
    <div>
      <div className='card'>
        <div>
          {clubName} (@{clubID})
        </div>
        <div>
          Description
        </div>
        <div>
          {clubDesc}
        </div>
        <div className='actions'>
          <button className='btn btn--alt' onClick={openEventMaker}>Make Event</button>
        </div>
        {eventMakerOpen && <EventMaker onCancel={closeEventMaker}/>}
        {eventMakerOpen && <Backdrop onCancel={closeEventMaker}/>}
      </div>
    </div>
  );
};

// failed implementaiton of recurivsily displaying all events
// <div>
//   {clubEvent.map(event) => (
//     <div className='card'>
//       <a href="">{event}</a>
//     </div>
//   )}
// </div>




export default ViewClubSingle;
