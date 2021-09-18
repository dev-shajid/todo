const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state.tasks.push(action.payload)
            return {
                ...state,
            }
        case 'CLICKED_TASK_ID':
            return {
                ...state,
                clickedTaskId:action.payload
            }
        case 'CHANGE_BG_COLOR':
            state.tasks.filter(e => e.id === action.id)[0].background = action.payload
            return {
                ...state,
                tasks:[...state.tasks]
            }
        case 'EDIT_TASK':
            let index = state.tasks.findIndex((v, i) => v.id === action.payload.id)
            state.tasks.splice(index,1,action.payload)
            return {
                ...state,
            }
        case 'DELETE_TASK':
            state.tasks.filter(e => e.id !== action.payload)
            return {
                ...state,
                tasks:state.tasks.filter(e => e.id !== action.payload)
            }
        case 'COMPLETED_TASK':
            return {
                ...state,
                completedTasks:[...state.completedTasks,action.payload],
                tasks:state.tasks.filter(e => e.id !== action.payload.id),
            }
        case 'DELETE_COMPLETED_TASK':
            console.log(action.payload);
            state.completedTasks.filter(e => e.id !== action.payload)
            return {
                ...state,
                completedTasks:state.completedTasks.filter(e => e.id !== action.payload)
            }
        default:
            return state
    }
}

export default Reducer