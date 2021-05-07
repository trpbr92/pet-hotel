import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function AddOwner(){
    const dispatch = useDispatch();

    const [owner, setOwner] = useState();

    const submitOwner = () => {
        dispatch({ type: 'ADD_OWNER', payload: owner})
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