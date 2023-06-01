import React, { createContext, useContext, useReducer, useState } from 'react';
import { useTodoReducer } from './reducers'
import { reducer } from './reducers'
import {ACTIONS} from './actions'

const TodoContext = createContext();
const { Provider } = TodoContext;

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useTodoReducer({
    todoName: '',
    todos: [],
  });

  const value = {
    todos: state.todos,
    setTodoName:(todoName) => dispatch({type: ACTIONS.SET_NAME, payload: todoName}),
    addTodo: dispatch({type: ACTIONS.ADD_TODO, payload: state.todoName}),
    deleteTodo: (todoId) => dispatch({type: ACTIONS.DELETE_TODO, payload: todoId}),
  }

  return (
    <Provider value={value} >
        {children}
    </Provider>
  );
}

export const useGlobalState = () => {
  return useContext(TodoContext);
}







