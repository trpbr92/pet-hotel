
function AddOwner(){

    const submitOwner = () => {
        console.log('in submitOwner');
    }

    return(
    <>
    <h3>Add Owner</h3>
    <div>
        <input type="text" placeholder="Owner name"></input>
        <button onClick={submitOwner}>Submit</button>
    </div>
    </>
    )
}

export default AddOwner;