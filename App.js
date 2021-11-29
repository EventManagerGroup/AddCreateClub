
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Component/Login';
import Register from './Component/Register';
import Sidebar, {showSidebar} from './Component/Sidebar';
import CardAC from './Component/CardAC';
import Profile from './Component/Profile';
import ViewClubs from './Component/ViewClubs';
import ViewClubSingle from './Component/ViewClubSingle';
import Settings from './Component/Settings';
import Signout from './Component/Signout';

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/ac" element= {<><Sidebar /><CardAC/></>} />
          <Route path = "/profile" element= {<><Sidebar /><Profile /></>} />
          <Route path = "/vclubs" element= {<><Sidebar /><ViewClubs /></>} />
          <Route path = "/vclubs/:id" element= {<><Sidebar /><ViewClubSingle /></>} />
          <Route path = "/settings" element= {<><Sidebar /><Settings /></>} />
          <Route path = "/signout" element= {<><Sidebar /><Signout /></>} />
        </Routes>
    </BrowserRouter>
  );
}

/**
function App() {
    return (
    <div>
      <div>
        {showSidebar()}
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
**/

export default App;
