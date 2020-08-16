import React ,{useEffect,useState} from 'react'

import logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassIcon from '../../assets/icons/give-classes.svg'
import {Link} from 'react-router-dom'
import api from '../../services/api'

import './Landing.css'


function Landing(){

    const [connections,setConnections] = useState('')


   async function getTotalConnections(){
    const totalConectios = await api.get('/connection')
    const {total} =  totalConectios.data
    setConnections(total)
    
  }

    useEffect(()=>{
       getTotalConnections()
    },[])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt=""/>
                    <h2>Sua plataforma de estudos online</h2>

                </div>
                    <img src={landingImg} className="hero-image" alt=""/>

                <div className="buttons-container">
                    
                <Link className="study" to="/study" >
                        estudar
                        <img src={studyIcon} alt=""/>

                </Link>
                {/* giv classes é dar aula */}
                <Link className="give-classes" to="/give-classes" >
                        trabalhar
                        <img  src={giveClassIcon} alt=""/>
                </Link>

                </div>
            <span className="total-connections">
                Total de {connections} connections realizadas
            
            </span>
            </div>
          
        </div>
        
    )
}

export default Landing