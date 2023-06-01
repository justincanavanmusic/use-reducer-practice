import React, { useReducer, useContext } from "react";
import { TodoContext } from "./utils/globalState";
import { ACTIONS } from "./utils/actions";
import { useGlobalState } from "./utils/globalState";

export default function Todo({ todo }) {
  const [state, dispatch] = useGlobalState();

//   console.log(state);

//   // console.log(todoContext.state)
//   console.log(state.length)
//   let stateLength = state.length-1;
//   let todo;

//   for (let i=0; i<state.length; i++) {
//     if(i=state.length-1){
//         console.log('hello')
//         todo=state[stateLength];
//         console.log(todo)
//     } if(i<state.length) {
//         todo=state[i];
//         console.log(todo)
//     }
//     console.log(todo)
//   }
// const todo=todo.todo;


//   console.log(state[stateLength])

  return (
    <>
      <div>
        {/* {state.map((todo) => ( */}
          {/* <div key={todo.id}> */}
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
          {/* </div> */}
         {/* ))}  */}
      </div>
    </>
  );
}
