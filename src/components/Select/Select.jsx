import React from 'react'

import './Select.css'


function Select({label,name,placeholder,options,value,onChange}){
   
    return(
            <div className="select-block">
                <label htmlFor={name}>{label}</label>
                <select value={value} onChange={onChange}   id={name} >
                    <option disabled value="" hidden >{placeholder}</option>
                    {options.map((item)=>{
                        return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                            
                        )
                    })}
                    
                </select>
            </div>
    )
}

export default Select