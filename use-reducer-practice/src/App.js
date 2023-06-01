import React, { useReducer, useState, useContext } from "react";
import { useTodoReducer } from './utils/reducers'
import { reducer } from './utils/reducers'
import Todo from "./Todo.js";
import { ACTIONS } from './utils/actions.js'
import { TodoContext } from './utils/globalState'
import { TodoProvider, useGlobalState } from './utils/globalState'


function App() {
  const [state, dispatch] = useReducer(reducer, []);
  // const [ state, dispatch ] = useContext(TodoContext)

  // const [state, dispatch] = useGlobalState();
  // const globalState = useGlobalState();
  // const { todoName } = state;
  // const [state, dispatch] = useTodoReducer({
  //   todoName: 'test',
  // });
  const [ todoName, setTodoName ] = useState("");

  // console.log(todoName)
  console.log(state);



  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: todoName } });
    // globalState.addTodo(e.target.value)
    setTodoName('');
  }

  // console.log(todoName);
  // console.log(todoName)


  return (
    <>
    {/* <TodoProvider> */}
    < TodoContext.Provider value={[ state, dispatch]}>
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
      {state.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      {/* </TodoProvider> */}
      </ TodoContext.Provider>
    </>
  );
}

export default App;
