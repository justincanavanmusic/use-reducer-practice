import { useReducer } from 'react';
import { ACTIONS } from './actions'

function newTodo(name) {
    return {
      id: Date.now(),
      name: name,
      complete: false,
    };
  }

export const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        // const todo = newTodo(action.payload.todoName)
        // // console.log(newTodo);
        // return {...state, todo};
      return [...state, newTodo(action.payload.name)];
  
        // case ACTIONS.SET_NAME:
        //   console.log(state);
        //   return {...state,
        //     todoName: action.payload.todoName,
        //     };

      case ACTIONS.TOGGLE_TODO:
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            console.log(action)
            return { ...todo, complete: !todo.complete };
          }
          // state.todos = todos;
          // return state;
          return todo;
        });
  
      case ACTIONS.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);
  
      default:
        return state;
    }
  }

  export function useTodoReducer(initialState) {
    return useReducer(reducer, initialState)
  }
