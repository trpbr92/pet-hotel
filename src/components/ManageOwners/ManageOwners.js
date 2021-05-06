import './ManageOwners.css';
import AddOwner from '../AddOwner/AddOwner';

function ManageOwners(){

    const deleteOwner = () => {
        console.log('in deleteOwner');
    }
    
    return(
    <>
    <h3>Owners</h3>
    <AddOwner />
    <table>
        <tr>
            <th>Name</th>
            <th>Number of Pets</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>Dane</td>
            <td>1</td>
            <td><button onClick={deleteOwner}>Delete</button></td>
        </tr>
    </table>
    </>
    )
}

export default ManageOwners;