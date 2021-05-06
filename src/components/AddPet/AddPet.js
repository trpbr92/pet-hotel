import {React, useState} from 'react';
import {useDispatch} from 'react-redux';


function AddPet() {

const [petInfo, setPetInfo] = useState('');

// const addPet = () => {
//     setPetInfo();
//     pet = {
//         petName: petName,
//         petColor: petColor,
//         petBreed: petBreed
//     }
// }

const handleChange = (event) => {
    setPetInfo(event.target.value);
    console.log(event.target.value);
}

const submitPet = () => {
    console.log('in submit pet');
}


    return(
        <>
    <h3>Add Pet</h3>
    <div>
        <input onChange={handleChange} type="text" placeholder="Pet Name"/>
        <input onChange={handleChange} type="text" placeholder="Pet Color"/>
        <input onChange={handleChange} type="text" placeholder="Pet Breed"/>
        <select name="owners" id="owners">
            <option value="ownername">Owner Name:</option>
        </select>
        <button onClick ={submitPet}>Submit</button>
    </div>
        </>
    )
}

export default AddPet;