import { createContext, useReducer } from "react";
import Reducer from './Reducer'

let getTasks = JSON.parse(localStorage.getItem('tasks'))
let getCompletedTasks = JSON.parse(localStorage.getItem('completedTasks'))

let initialState = {
    clickedTaskId:'1',
    tasks: getTasks || [],
    completedTasks: getCompletedTasks || []
}

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer, initialState)
    
    return (
        <Context.Provider
            value={{
                clickedTaskId:state.clickedTaskId,
                tasks: state.tasks,
                completedTasks:state.completedTasks,
                dispatch
            }}
        >
            {children}
        </Context.Provider>
    )
}