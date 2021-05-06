import {React, useState} from 'react';
import {useDispatch} from 'react-redux';


function AddPet() {

const [petInfo, setPetInfo] = useState('');
const [petName, setPetName] = useState('');
const [petColor, setPetColor] = useState('');
const [petBreed, setPetBreed] = useState('');
// const addPet = () => {
//  console.log('in addPet');
//     pet = {
//         petName: petName,
//         petColor: petColor,
//         petBreed: petBreed
//     }
        //setPetInfo(pet);
// }



const submitPet = () => {
    console.log('in submit pet');
}


    return(
        <>
    <h3>Add Pet</h3>
    <div>
        <input onChange={(event)=> setPetName(event.target.value)} type="text" placeholder="Pet Name"/>
        <input onChange={(event)=> setPetColor(event.target.value)} type="text" placeholder="Pet Color"/>
        <input onChange={(event)=> setPetBreed(event.target.value)} type="text" placeholder="Pet Breed"/>
        <select name="owners" id="owners">
            <option value="ownername">Owner Name:</option>
        </select>
        <button onClick ={submitPet}>Submit</button>
    </div>
        </>
    )
}

export default AddPet;