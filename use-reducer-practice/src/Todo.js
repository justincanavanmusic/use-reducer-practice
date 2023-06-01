import React, { useReducer, useContext } from 'react'
import { TodoContext } from './utils/globalState'
import { ACTIONS } from './utils/actions'
import { useGlobalState } from './utils/globalState'



export default function Todo({ todo }) {

// const [ state, dispatch ] = useGlobalState();
// const [state, dispatch] = useReducer(reducer, []);
const { state, dispatch } = useContext(TodoContext)

// console.log(todoContext.state)


    return (
        <div>
            <span style={{ color: todo.complete ? 'green' : 'red'}}>
                {todo.name}
            </span>
            <button onClick={() => 
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button onClick={() =>
                dispatch({type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
            }>Delete</button>

        </div>
    )
}