
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Sidebar from './Component/Sidebar';
import CardAC from './Component/CardAC';
import ViewClubs from './Component/ViewClubs';
import ViewClubEvents from './Component/ViewClubEvents';
import ViewClubAnnouncements from './Component/ViewClubAnnouncements';
import Settings from './Component/Settings';
import Signout from './Component/Signout';

export var url = "http://localhost:3001";

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path = "" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/home/*" element= {<Sidebar />} />
          <Route path = "/home/ac" element={<CardAC/>} />
          <Route path = "/home/clubs" element= {<ViewClubs />} />
          <Route path = "/home/clubs/:clubID/events" element= {<ViewClubEvents />} />
          <Route path = "/home/clubs/:clubID/announcements" element={<ViewClubAnnouncements/>} />
          <Route path = "/home/settings" element= {<Settings />} />
          <Route path = "/home/signout" element= {<Signout />} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
