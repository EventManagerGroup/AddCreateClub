import React, { useState, useEffect } from "react";
import axios from "axios";

function EventMaker(props){
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLoc, setEventLoc] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  const handleSubmit = async e =>{
    e.preventDefault();

    // PATCH REQUEST - event parameter of clubs

    // const response = await axios.post("http://localhost:3001/clubs", {
    //   id: eventName,
    //   date: eventDate,
    //   description: eventDesc,
    //   particpants: [JSON.parse(localStorage.getItem("user"))]
    // });

  };


  return (
    <div className='modal'>
      <div>
        <p>Create Event</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Name: </label>
          <input
            type="text"
            value={eventName}
            placeholder="enter the event name"
            onChange={({ target }) => setEventName(target.value)}
            />
        </div>
        <div>
        <label htmlFor="eventDate">Date: </label>
        <input
          type="text"
          value={eventName}
          placeholder="enter the date"
          onChange={({ target }) => setEventDate(target.value)}
          />
        </div>
        <div>
          <label htmlFor="loc">Event Location: </label>
          <input
            type="text"
            value={eventName}
            placeholder="enter the event location"
            onChange={({ target }) => setEventLoc(target.value)}
            />
        </div>
        <div>
        <label htmlFor="eventDesc">Event Description: </label>
        <input
          type="text"
          value={eventDesc}
          placeholder="enter your event description"
          onChange={({ target }) => setEventDesc(target.value)}
          />
        </div>
        <button type ="submit">Enter</button>
      </form>
    </div>
  );
}

export default EventMaker;
