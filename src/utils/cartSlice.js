import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state , action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state , payload)=>{
            state.items.pop()
        }
        ,
        clearItems:(state)=>{
            state.items = []
        }
    }

})


export const {addItems , removeItems , clearItems} = cartSlice.actions

export default cartSlice.reducer