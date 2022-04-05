import "./styles.css";

import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const Actions = {
  Addtodo: "addtodo",
  Toggletodo: "toggletodo"
};
function reducer(todos, action) {
  switch (action.type) {
    case Actions.Addtodo:
      return [...todos, newTodo(action.payload.name)];
    case Actions.Toggletodo:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case Actions.Deletetodo:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function Other() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: Actions.Addtodo, payload: { name: name } });
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
