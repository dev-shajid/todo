import React, { useState } from 'react'
import './Nav.scss'
// import {Icon} from '@material-ui/core'
import { Search } from '@material-ui/icons';
import CreateTask from '../CreateTask/CreateTask';
import { Button } from '@material-ui/core';


const Nav = ({setSearchInput,searchInput}) => {

    const [activeSearch,setActiveSearch]=useState(false)

    const [addTask,setAddTask] = useState(false)

    return (
        <header>
            <div className="container">
                
                {/* Mobile Search Bar */}
                <div className="mobile_search_bar">
                    <Search onClick={()=>setActiveSearch(!activeSearch)}/>
                </div>

                {/* LOGO  */}
                <div className="logo">
                    <img src="../images/LOGO.png" alt="" />
                </div>

                {/* Search Bar  */}
                <div className={activeSearch?"search_bar active":"search_bar" }>
                <input 
                onChange={(e)=>setSearchInput(e.target.value)}
                value={searchInput}
                type="search" 
                className="form-control ds-input"
                placeholder="Search your tasks..."  
                autoComplete="off" />
                </div>

                {/* Add New Task  */}
                <div className="add_task">
                    <Button onClick={()=>setAddTask(true)} className="add_task_button">Add Task</Button>
                    <CreateTask setAddTask={setAddTask} addTask={addTask}/>
                </div>
            </div>
        </header>
    )
}

export default Nav
