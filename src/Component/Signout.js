import {url} from '../App';
import {useNavigate} from 'react-router-dom';

function Signout(){
  let navigate = useNavigate();
  // logout user
  const handleLogout = () => {
    localStorage.clear();
    navigate("");
  };

  return (
    <div className='card'>
      <p>Are you sure you want to sign out?</p>
      <button className='btn btn--alt'onClick={() => navigate(-1)}>No</button>
      <button className='btn btn--alt' onClick={handleLogout}>Yes, sign out.</button>
    </div>
  )
}

export default Signout;
