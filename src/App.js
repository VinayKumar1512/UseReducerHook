import "./styles.css";
//useReducer hook-> another hook which is used to change
//state of the component,it helps us to manage more
//complex states

import React, { useReducer } from "react";

//we can define actions to be peformed inside an actions
//object this makes easier for us to change actions
const Actions = {
  Increment: "increment",
  Decrement: "decrement"
};
function reducer(state, action) {
  switch (action.type) {
    case Actions.Increment:
      return { count: state.count + 1 };
    case Actions.Decrement:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default function App() {
  //useReducer is having two params i.e reducer function
  //which perform state change and second is intial state
  //value i.e parameter whose state to be changed
  //it returns to values,state and dispatch method i.e to be
  //called to change state or state mangaement
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className="App">
      <button type="button" onClick={decrement}>
        dec
      </button>
      <h2>{state.count}</h2>
      <button type="button" onClick={increment}>
        inc
      </button>
    </div>
  );
}
