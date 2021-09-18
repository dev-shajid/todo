import React from 'react'
import { Cancel } from '@material-ui/icons'
import './ReadTask.scss'

const ReadTask = ({ readTask, setReadTask, task }) => {
    
    return (
        <div className={readTask?"read_task active":"read_task"}>
            <div className="read_task_wrapper" style={{background:task.background}}>
                <div className="cancel">
                    <Cancel onClick={()=>setReadTask(false)} />
                </div>
                <div className="task_info">
                    <div className="task_time">{task?.time}</div>
                    <div className="task_title">{task?.title}</div>
                    <div className="task_description">{task.description}</div>
                </div>
            </div>
        </div>
    )
}

export default ReadTask