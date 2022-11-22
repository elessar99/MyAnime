export const setİtem=(item)=>{
    return{
        type:"SET_ITEM",
        payload:item
    }
}
export const addItem=(item)=>{
    return{
        type:"ADD_ITEM",
        payload:item
    }
}
export const delItem=(item)=>{
    return{
        type:"DEL_ITEM",
        payload:item
    }
}

export const upItem=(item)=>{
    return{
        type:"UP_ITEM",
        payload:item
    }
}

export const downItem=(item)=>{
    return{
        type:"DOWN_ITEM",
        payload:item
    }
}
export const setKey=(key)=>{
    return{
        type:"SET_KEY",
        payload:key
    }
}
export const setItem=(key)=>{
    return{
        type:"SET_ITEMX",
        payload:key
    }
}
