import { Button, TextField } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { Context } from '../../Context/ContextProvider'
import './CreateTask.scss'

const CreateTask = ({ addTask, setAddTask }) => {

    const { tasks, dispatch } = useContext(Context)

    const [taskInfo, setTaskInfo] = useState({ title: "", description: "", background: "#EAEEFF",id:'',time:'' })
    
    const handleChange = (e) => {
        setTaskInfo({...taskInfo,[e.target.name]:e.target.value,time:new Date().toDateString(), id: tasks[tasks.length-1]?.id+1 || 1})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskInfo.title && taskInfo.description) {
            dispatch({ type: "ADD_TASK", payload: taskInfo })
            setAddTask(false)
            setTaskInfo({ title: "", description: "", background: "#EAEEFF", id:'',time:''})
        } else {
            alert('Please, Fill all the fields.')
        }
    }

    return (
        <div className={addTask?"create_task active":"create_task"}>
            <div className="create_task_wrapper">
                <div className="cancel">
                    <Cancel onClick={() => {
                        setTaskInfo({ title: "", description: "", background: "#EAEEFF", id: ""})
                        setAddTask(false)
                    }} />
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={handleChange} name="title" value={taskInfo.title} id="outlined-basic" label="Title" variant="outlined" />
                    <TextField onChange={handleChange} name="description" value={taskInfo.description} rows={4} multiline id="outlined-basic" label="Description" variant="outlined" />
                    <Button onClick={handleSubmit}>Save</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
