import './History.css';

function History(){

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
           <tr>
                <td>Chris</td>
                <td>Charlie</td>
                <td>Shih-tzu</td>
                <td>Black</td>
                <td>no</td>
                <td><button onClick={deletePet}>Delete</button> | <button onClick={checkInPet}>Check In</button></td>
           </tr> 
        </table>
        </>
    )
}

export default History;