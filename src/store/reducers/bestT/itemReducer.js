
const initialState={
    itemSrc: ""
}


function itemReducer(state=initialState,action){
    switch (action.type) {
        case "SET_ITEMX":
            return {itemSrc:action.payload}
        default:
            return state
    }
}
export default itemReducer
