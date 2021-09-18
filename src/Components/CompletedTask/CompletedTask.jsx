import React, { useContext } from 'react'
import { Context } from '../../Context/ContextProvider'
import './CompletedTask.scss'

const CompletedTask = ({ task }) => {
    const { dispatch } = useContext(Context)
    // console.log(task);
    return (
    <div className="task" style={{background:task?.background,opacity:'0.6'}}>
            
            <div className="task_info" style={{cursor:"default"}}>
                <div className="task_time">{task?.time}</div>
                <div className="task_title" style={{textDecoration:"line-through"}}>{task?.title}</div>
                <div className="task_description" style={{textDecoration:"line-through"}}>{task?.description?.length<=80?task.description:task?.description?.slice(0,80)+' ...'}</div>
            </div>

            <div className="task_control">
                <div className="row">
                    <div className="col-2">
                        <img onClick={()=>dispatch({type:"DELETE_COMPLETED_TASK",payload:task.id})} src="../images/delete-task.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedTask
