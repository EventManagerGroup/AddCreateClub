
function CreateClub(props){

  return (
    <div className='modal'>
      <p>Create Club</p>
      <p>Enter your club name: </p>
      <button className='btn btn--alt' onClick={props.onCancel}>Go Back</button>
    </div>
  );
}

export default CreateClub;
