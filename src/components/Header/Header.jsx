import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/icons/back.svg'

function Header ({title,children,description}){
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt=""/>
                </Link>
                <img src={logo} alt=""/>
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                <p> {description}</p>
               
                {children}
            </div>
        </header>
    )
}

export default Header