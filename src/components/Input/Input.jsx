import React from 'react'

import './Input.css'


function Input({label,name,type,placeholder,value,onChange}){
   
    return(
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input onChange={onChange} placeholder={placeholder} value={value} type={type} id={name}/>
            </div>
    )
}

export default Input