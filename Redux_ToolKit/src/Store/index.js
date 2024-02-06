import {createStore} from "redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
// const INITIAL_VALUE={
//     counter:5,
//     privacy:false
// }

const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++
        },
        decrement:(state)=>{
            state.counterVal--
        },
        add:(state,action)=>{
           state.counterVal+=action.payload.num
        },
        substract:(state,action)=>{
            state.counterVal-=action.payload.num
        }
    }
});

const  privacySlice=createSlice({
    name:'privacy',
    initialState:false,
    reducers:{
        toggle:(state)=>!state
    }
});
const counterStore=configureStore({reducer:{
counter:counterSlice.reducer,
privacy:privacySlice.reducer
}})
export const counterActions=counterSlice.actions
export const privacyActions=privacySlice.actions
export default counterStore


/*const counterReducer=(store=INITIAL_VALUE,action)=>{
    // **everytime we need to return whole store after changing, 
    if(action.type==="INCREMENT"){
        return {...store,counter:store.counter+1}
    }
    else if(action.type==="DECREMENT"){
        return {...store,counter:store.counter-1}
    }
    else if(action.type==="ADD"){
        return {...store,counter:store.counter+Number(action.payload.num)}
    }
    else if(action.type==="SUBSTRACT"){
        return {...store,counter:store.counter-Number(action.payload.num)}
    }
    else if(action.type==="PRIVACY"){
        return {...store,privacy:!store.privacy}
    }
  return store
}*/