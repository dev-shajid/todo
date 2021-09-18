import React, { useContext } from 'react'
import { Context } from '../../Context/ContextProvider'
import './Color.scss'

const Color = ({task,className}) => {
    const { dispatch } = useContext(Context)

    return (
        <div className={`color_plate ${className}`}>
            {
                ['#EAEEFF','#7AAFFF','#B795FF','#FF9C9C','#FEBBFF','#FFE456'].map((v,i) => (
                    <div key={i} onClick={()=>dispatch({type:"CHANGE_BG_COLOR",payload:v, id:task.id})} className="color"></div>
                ))
            }
        </div>
    )
}

export default Color
