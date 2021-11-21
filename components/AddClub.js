
function AddClub(props){

  return (
    <div className='modal'>
      <p>Add Club</p>
      <p>Enter your add code: </p>
      <button className='btn btn--alt' onClick={props.onCancel}>Go Back</button>
    </div>
  );
}

export default AddClub;
