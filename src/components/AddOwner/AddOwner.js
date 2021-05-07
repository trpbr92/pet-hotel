import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function AddOwner(){
    const dispatch = useDispatch();

    const [owner, setOwner] = useState();

    const submitOwner = () => {
        let owners = {
            owner: owner,
        }
        dispatch({ type: 'ADD_OWNER', payload: owners})
        console.log('in submitOwner');
    }

    return(
    <>
    <h3>Add Owner</h3>
    <div>
        <input onChange={(event)=> setOwner(event.target.value)} value={owner} type="text" placeholder="Owner name"></input>
        <button onClick={submitOwner}>Submit</button>
    </div>
    </>
    )
}

export default AddOwner;