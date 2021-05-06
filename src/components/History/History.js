import './History.css';

function History(){

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
                <td><button>Delete</button> | <button>Check In</button></td>
           </tr> 
           <tr>
                <td>Dane</td>
                <td>Juniper</td>
                <td>Cat</td>
                <td>Tabby</td>
                <td>no</td>
                <td><button>Delete</button> | <button>Check In</button></td>
           </tr> 
        </table>
        </>
    )
}

export default History;