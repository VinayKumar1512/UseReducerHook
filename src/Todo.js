import React from "react";
import { Actions } from "./Other";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name};
      </span>
      <button
        onClick={() =>
          dispatch({ type: Actions.Toggletodo, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: Actions.Deletetodo, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
