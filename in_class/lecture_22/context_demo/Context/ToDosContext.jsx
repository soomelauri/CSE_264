// ToDosContext.jsx

// Explain this thoroughly

import { createContext, useContext, useReducer } from "react";

// first thing -> set up initial state
const initialState = {
    todos: []
}

// Next we need to set up our createContext with the initial state and the dispatch function
const ToDosContext = createContext({state: initialState, dispatch: () => null})

// next we need a function housed within the context, we will use in the reducer
// to handle state changes 
// the reducer will expect an action with a type payload
const toDosReducer = (state, action) => {
    switch (action.type) {
        case 'fetchToDos': {
            // on each return, we will pass a spread of state in case our state 
            // contains more than 1 thing
            return{...state, todos: action.payload.todos}
        }
        case 'addToDos': {
            state.todos.push(action.payload.todos)
            return {...state}
        }
        default:
            return {...state}
    }
}

// Export the provider that will allow components to use the context
export function ToDoProvider({children}) {
    const [state, dispatch] = useReducer(toDosReducer, initialState)

    return (
        <ToDosContext.Provider value={{state, dispatch}}>
            {children}
        </ToDosContext.Provider>
    )
}

// export the ability to use context
export function useToDoData() {
    return useContext(ToDosContext)
}
