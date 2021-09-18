import React, { useContext } from 'react'
import { Context } from '../../Context/ContextProvider'
import CompletedTask from '../CompletedTask/CompletedTask'

const CompletedTasks = ({searchInput}) => {    
    const { completedTasks } = useContext(Context)
    // console.log(completedTasks);

    localStorage.setItem('completedTasks',JSON.stringify(completedTasks))
    
    return (
            
        completedTasks?.length>0 &&
        <>
            <hr />
            <div className="container mt-3">
                <>
                <h3>Completed Task-{completedTasks.length}</h3>
                <div className="row">
                {
                    searchInput?
                    completedTasks.filter(e=>e.title.toLowerCase().includes(searchInput.toLowerCase())).map((task, i) => (
                        <>
                        <div key={i} className="col-lg-3 col-md-4 col-sm-6 p-2 d-flex">
                            <CompletedTask key={i} task={task} />
                        </div>
                        </>
                    )) :
                    completedTasks?.map((task, i) => (
                        <>
                        <div key={i} className="col-lg-3 col-md-4 col-sm-6 p-2 d-flex">
                            <CompletedTask key={i} task={task} />
                        </div>
                        </>
                    )) 
                }
                </div>
                </>
            </div>
        </>
            
    )
}

export default CompletedTasks
