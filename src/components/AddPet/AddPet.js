import {React, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';


function AddPet() {

useEffect(() => {
    
}, [])

const dispatch = useDispatch();

const [petName, setPetName] = useState('');
const [petColor, setPetColor] = useState('');
const [petBreed, setPetBreed] = useState('');

const pets = {
    petName: petName,
    petColor: petColor,
    petBreed: petBreed
}

    
console.log(pets)
const addPet = () => {
 console.log('in addPet');
        dispatch({type: 'ADD_PET', payload: pets})
}



    return(
        <>
    <h3>Add Pet</h3>
    <div>
        <input onChange={(event)=> setPetName(event.target.value)}  type="text" placeholder="Pet Name"/>
        <input onChange={(event)=> setPetColor(event.target.value)}  type="text" placeholder="Pet Color"/>
        <input onChange={(event)=> setPetBreed(event.target.value)}  type="text" placeholder="Pet Breed"/>
        <select name="owners" id="owners">
            <option value="ownername">Owner Name:</option>
        </select>
        <button onClick ={addPet}>Submit</button>
    </div>
        </>
    )
}

export default AddPet;