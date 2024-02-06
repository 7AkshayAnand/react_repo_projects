

const redux=require('redux');

const INITIAL_VALUE={
    counter:0
};
// our reducer just increment-decrement the value of counter variable and wraps into a object and returns it
const reducer = (store = INITIAL_VALUE, action) => {
   let newStore=store;
   if(action.type==="INCREMENT"){
    newStore={counter:store.counter+1}
   }
   else if(action.type==="DECREMENT"){
    newStore={counter:store.counter-1}
   }
   else if(action.type==="ADD"){
    newStore={counter:store.counter+action.payload.number}
   }
   return newStore
  };


// creating store
const store=redux.createStore(reducer)

/*subscriber: It requests data from store, if any data will further will updated then all componenet using that data will get updated 
with this new data and repainted/re-rendered

**subscriber can be any react component or any function that basically consumes data from the store
*/

const subscriber=()=>{
    const state=store.getState()
    console.log("data is ",state);
}
// here we are actually subscribing so that if any changes made to the already consumed data then  our subscriber function also get 
// updated  with this new data as well
store.subscribe(subscriber)


// Action
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'ADD',payload:{number:7}})

