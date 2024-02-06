import {createStore} from "redux"
const INITIAL_VALUE={
    counter:5,
    privacy:false
}
const counterReducer=(store=INITIAL_VALUE,action)=>{
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
}
const counterStore=createStore(counterReducer)
export default counterStore