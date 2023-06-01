import React, { useReducer, useState } from "react";
import { useTodoReducer } from './utils/reducers'
import { reducer } from './utils/reducers'
import Todo from "./Todo.js";
import { ACTIONS } from './utils/actions.js'
// import { reducer } from './utils/reducers.js'
import { TodoProvider, useGlobalState } from './utils/globalState'


function App() {
  // const [state, dispatch] = useReducer(reducer, []);
  const [state, dispatch] = useGlobalState();
  // const globalState = useGlobalState();
  // const { todoName } = state;
  // const [state, dispatch] = useTodoReducer({
  //   todoName: 'test',
  // });
  const [ todoName, setTodoName ] = useState("");

  // console.log(todoName)
  console.log(`Global State: `, globalState)


  function handleSubmit(e) {
    e.preventDefault();
    globalState.addTodo(e.target.value)
    // setTodoName('');
  }

  // console.log(todoName);
  console.log(todoName)


  return (
    <>
    <TodoProvider>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          //   dispatch({
          //   type: ACTIONS.SET_NAME,
          //   payload: { todoName : e.target.value },
          // })}
        />
      </form>
      {/* <p>{todoName}</p> */}
      {/* {todoName.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })} */}
      </TodoProvider>
    </>
  );
}

export default App;
