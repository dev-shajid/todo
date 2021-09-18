import React, { useContext, useState } from 'react'
import { Context } from '../../Context/ContextProvider'
import Task from '../../Components/Task/Task'
import ReadTask from '../ReadTask/ReadTask'

const Tasks = ({searchInput}) => {
    const [readTask, setReadTask] = useState(false)
    const [currentTask, setCurrentTask] = useState({})
    
    const { tasks } = useContext(Context)
    
    localStorage.setItem('tasks',JSON.stringify(tasks)) 
    
    const handleClick = (e) => {
        setCurrentTask(e)
        // setReadTask(true)
    }

    return (
        <div className="container mt-3">
            {
                tasks.length?
                <>
                <h3>Task-{tasks.length}</h3>
                <div className="row">
                {
                    searchInput?
                    tasks.filter(e=>e.title.toLowerCase().includes(searchInput.toLowerCase())).map((task, i) => (
                        <>
                        <div onClick={()=>handleClick(task)} key={i} className="col-lg-3 col-md-4 col-sm-6 p-2 d-flex">
                            <Task key={i} task={task}  setReadTask={setReadTask} />
                        </div>
                        <ReadTask onClick={()=>setReadTask(false)} setReadTask={setReadTask} readTask={readTask} task={currentTask} />
                        </>
                    )) :
                    tasks?.map((task, i) => (
                        <>
                        <div onClick={()=>handleClick(task)} key={i} className="col-lg-3 col-md-4 col-sm-6 p-2 d-flex">
                            <Task key={i} task={task}  setReadTask={setReadTask} />
                        </div>
                        <ReadTask onClick={()=>setReadTask(false)} setReadTask={setReadTask} readTask={readTask} task={currentTask} />
                        </>
                    ))
                }
                </div>
                </> :                
                    <h1 style={{ textAlign:"center"}}>There is no task available</h1>
            }
        </div>
    )
}

export default Tasks
