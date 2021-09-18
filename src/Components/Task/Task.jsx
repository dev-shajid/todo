import React, { useContext, useState } from 'react'
import { Context } from '../../Context/ContextProvider'
import Color from '../Color/Color'
import EditTask from '../EditTask/EditTask'
import './Task.scss'

const Task = ({ task, setReadTask }) => {
    const { dispatch } = useContext(Context)
    const [editPopup,setEditPopoup]=useState(false)
    // console.log(editPopup);

    return (
        <div className="task" style={{background:task?.background}}>
            
            <div className="task_info"  onClick={()=>setReadTask(true)}>
                <div className="task_time">{task?.time}</div>
                <div className="task_title">{task.title}</div>
                <div className="task_description">{task?.description?.length<=80?task?.description:task?.description?.slice(0,80)+' ...'}</div>
            </div>

            <div className="task_control">
                <div className="row">
                    <div className="col-2" style={{position:"relative"}}>
                        <img onClick={()=>dispatch({type:"CLICKED_TASK_ID",payload:task.id})} src="../images/color-change.png" alt="" />
                        <Color className="change_color" task={task}/>
                    </div>
                    <div className="col-2">
                        <img onClick={()=>dispatch({type:"COMPLETED_TASK",payload:task})} src="../images/completed-task.png" alt="" />
                    </div>
                    <div className="col-2">
                        <img onClick={() => setEditPopoup(true)} src="../images/edit-task.png" alt="" />
                        <EditTask task={task} editPopup={editPopup} setEditPopoup={setEditPopoup}/>
                    </div>
                    <div className="col-2">
                        <img onClick={()=>dispatch({type:"DELETE_TASK",payload:task.id})} src="../images/delete-task.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
