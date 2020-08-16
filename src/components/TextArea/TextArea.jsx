import React from 'react'

import './TextArea.css'


function TextArea({label,name,type,placeholder,value,onChange}){
   
    return(
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea  onChange={onChange} placeholder={placeholder} value={value}  id={name} /> 
            </div>
    )
}

export default TextArea