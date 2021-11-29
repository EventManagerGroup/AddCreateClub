
function Signout(){
  // logout user
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = '';
  };

  const goHome = () =>{
    window.location.pathname = "/ac"
  };

  return (
    <div className='card'>
      <p>Are you sure you want to sign out?</p>
      <button className='btn btn--alt'onClick={goHome}>No</button>
      <button className='btn btn--alt' onClick={handleLogout}>Yes, sign out.</button>
    </div>
  )
}

export default Signout;
