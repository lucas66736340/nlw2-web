import React from 'react'

import imgWhats from '../../assets/icons/whatsapp.svg'

import './TeacherItem.css'
import api from '../../services/api'
function TeacherItem({user_id,avatar,name,bio,materia,preco,whatsapp}){

    async function criarNovaConexao(){
        await api.post('/connection',{
            user_id
        })
                    
    }

    return(
        <div className="teacher-item">
        <header>
            <img src={avatar} alt=""/>
            <div>
                <strong>{name}</strong>
                <span>{materia}</span>
            </div>
        </header>

        <p>
            {bio}
           
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>
                    {preco}
                </strong>
            </p>
          
           <a target="_blanck" onClick={criarNovaConexao} href={`http://wa.me/${whatsapp}`} type="button">
            <img src={imgWhats} alt=""/>
            Entrar em contato
           
        </a>
        
        
        </footer>
    </div>
    )
}

export default TeacherItem