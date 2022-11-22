
const initialState={
    key: 1
}


function keyReducer(state=initialState,action){
    switch (action.type) {
        case "SET_KEY":
            return {key:action.payload}
        default:
            return state
    }
}
export default keyReducer
