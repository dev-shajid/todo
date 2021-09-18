import { Button, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { Context } from '../../Context/ContextProvider'
import './EditTask.scss'

const EditTask = ({ editPopup, setEditPopoup, task }) => {
    // console.log(task);
    const { dispatch } = useContext(Context)

    const [taskInfo, setTaskInfo] = useState({ title: task.title, description: task.description, background: task.background, id:task.id,time:task.time })
    
    const handleChange = (e) => {
        setTaskInfo({...taskInfo,[e.target.name]:e.target.value,time:new Date().toDateString()})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskInfo.title && taskInfo.description) {
            dispatch({ type: "EDIT_TASK", payload: taskInfo })
            setEditPopoup(false)
            // setTaskInfo({ title: "", description: "", background: "#EAEEFF", id:'',time:''})
        } else {
            alert('Please, Fill all the fields.')
        }
    }

    return (
        <div className={editPopup?"edit_task active":"edit_task"}>
            <div className="edit_task_wrapper">
                <div className="cancel">
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField onChange={handleChange} name="title" value={taskInfo?.title} id="outlined-basic" label="Title" variant="outlined" />
                    <TextField onChange={handleChange} name="description" value={taskInfo?.description} rows={4} multiline id="outlined-basic" label="Description" variant="outlined" />
                    <div className="button_wrapper">
                        <Button onClick={() => {
                            setEditPopoup(false)
                        }}>Cancel</Button>
                        <Button onClick={handleSubmit}>Update</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTask
