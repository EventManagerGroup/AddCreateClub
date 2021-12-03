
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

// http://dwcql5bi10.execute-api.us-west-1.amazonaws.com/v1
export var url = "http://localhost:3001";

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path = "" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/home/*" element= {<Sidebar />} >
            <Route path = "ac" element={<CardAC/>} />
            <Route path = "clubs" element= {<ViewClubs />} />
            <Route path = "clubs/:clubID/events" element= {<ViewClubEvents />} />
            <Route path = "clubs/:clubID/announcements" element={<ViewClubAnnouncements/>} />
            <Route path = "settings" element= {<Settings />} />
            <Route path = "signout" element= {<Signout />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
