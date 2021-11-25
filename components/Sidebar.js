import {SidebarData} from './SidebarData';

import CardAC from './CardAC';
import Profile from './Profile';
import Settings from './Settings';
import Signout from './Signout';

const showCardAC = () =>{
  if(window.location.pathname === "/ac"){
    return <CardAC />
  }
}

const showProfile = () =>{
  if(window.location.pathname === "/profile"){
    return <Profile />
  }
}

const showSettings = () =>{
  if(window.location.pathname === "/settings"){
    return <Settings />
  }
}
const showSignout = () =>{
  if(window.location.pathname === "/signout"){
    return <Signout />
  }
}

function Sidebar(){
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return(
              <li
                key={key}
                className= "row"
                id={window.location.pathname === val.path ? "active" : ""}
                onClick={()=>{
                  window.location.pathname = val.path;
                }}
              >
                <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {showCardAC()}
        {showProfile()}
        {showSettings()}
        {showSignout()}
      </div>
    </div>
  );
}

export default Sidebar;
