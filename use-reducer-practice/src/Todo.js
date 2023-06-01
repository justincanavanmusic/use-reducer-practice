import React, { useReducer, useContext } from "react";
import { TodoContext } from "./utils/globalState";
import { ACTIONS } from "./utils/actions";
import { useGlobalState } from "./utils/globalState";

export default function Todo() {
  const [state, dispatch] = useContext(TodoContext);

  console.log(state);

  // console.log(todoContext.state)

  return (
    <>
      <div>
        {state.map((todo) => (
          <div key={todo.id}>
            <span style={{ color: todo.complete ? "green" : "red" }}>
              {todo.name}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Toggle
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
