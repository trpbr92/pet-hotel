const listPetsReducer = (state= [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default listPetsReducer;