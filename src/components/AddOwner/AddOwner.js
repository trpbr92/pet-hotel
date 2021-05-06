import {React, useState} from 'react';

function AddOwner(){

    const [owner, setOwner] = useState();

    const submitOwner = () => {
        console.log('in submitOwner');
    }

    return(
    <>
    <h3>Add Owner</h3>
    <div>
        <input onChange={(event)=> setOwner(event.target.value)} type="text" placeholder="Owner name"></input>
        <button onClick={submitOwner}>Submit</button>
    </div>
    </>
    )
}

export default AddOwner;