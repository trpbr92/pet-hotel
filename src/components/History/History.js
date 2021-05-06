import './History.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function History(){
const dispatch = useDispatch();

const pets = useSelector((store) => store.listpets)

useEffect(() => {
    dispatch({type: 'FETCH_LIST'})
}, [])

    const deletePet = () => {
        console.log('in deletePet');

    }

    const checkInPet = () => {
        console.log('in checkInPet');
    }

    return(
        <>
        <h3>History</h3>
        <table>
            <tr>
                <th>Owner</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Checked in</th>
                <th>Actions</th>
            </tr>
          {pets.map(pet => {
              return (
          <tr>
                <td>{pet.name}</td>
                <td>{pet.pet_name}</td>
                <td>{pet.breed}</td>
                <td>{pet.color}</td>
                <td>{pet.checked_in ? "Yes" : "No"}</td>
                <td><button onClick={deletePet}>Delete</button> | <button onClick={checkInPet}>Check In</button></td>
           </tr> 
              )
           })} 
        </table>
        </>
    )
}

export default History;