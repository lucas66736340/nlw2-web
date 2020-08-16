import React,{ useState,useEffect } from 'react'
import Header from '../../components/Header/Header'
import TeacherItem from '../../components/TeacherItem/TeacherItem'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import api from '../../services/api'
import { FaSearch } from "react-icons/fa";



import './TeacherList.css'
function TeacherList(){

    const [materia,setMateria] =useState('')
    const [diaSemana,setDiaSemana] =useState('')
    const [horario,setHorario] =useState('')

    const [aulas,setAulas] = useState([])

    useEffect(()=>{
        getAulas()
    },[])

  async function getAulas(){
        const response = await api.get('/classes')
        console.log(response.data)
        setAulas(response.data)
  }

   async function filtraProffys(e){
       e.preventDefault()
       if(!diaSemana || !materia ||!horario){
           alert('Preencha todos os filtros')
       }else{
        const response = await api.get('/classes',{
            params:{
                week_day:diaSemana,
                subject:materia,
                time:horario
               
            }
 
        })
 
        
        setAulas(response.data)
       }
      
  
    }

    return(
        <div id="page-teacher-list" className="container">
           <Header title="Esses são os profis disponiveis " >
                    <form onSubmit={filtraProffys} id="search-teacher">
                          < Select
                            placeholder="Selecione a Materia"
                            type="text"
                            name="materia"
                            label="Matéria"
                            value={materia}
                            onChange={(e)=>{
                                setMateria(e.target.value)
                             }}
                            options={[
                                {value:'Artes',label:'Artes'},
                                {value:'Biologia',label:'Ciencias'},
                                {value:'Matematica',label:'Matematica'},
                                {value:'Portugues',label:'Portugues'},
                                {value:'Quimica',label:'Quimica'},
                                {value:'Geografia',label:'Geografia'},
                                {value:'Fisica',label:'Fisica'},
                                {value:'Filosofia',label:'Filosofia'},
                                
                            ]}
                            />

                           
                          < Select
                            placeholder="Escolha um dia"
                            type="text"
                            name="dia-semana"
                            label="Dia da semana"

                            value={diaSemana}
                            onChange={(e)=>{
                                setDiaSemana(e.target.value)
                            }}
                            options={[
                                {value:'0',label:'Domingo'},
                                {value:'1',label:'Segunda'},
                                {value:'2',label:'Terça'},
                                {value:'3',label:'Quarta'},
                                {value:'4',label:'Quinta'},
                                {value:'5',label:'Sexta'},
                                {value:'6',label:'Sabado'},
                              

                            ]}
                            />
                         
                      

                        <Input type="time"
                         name="horario"
                          label="Horario"
                            value={horario}
                            onChange={(e)=>{
                                setHorario(e.target.value)
                            }}
                          />

                    <button  type="submit">
                         <FaSearch size={20} />
                      <h3>Buscar</h3>  
                    </button>
                    </form>
            </Header>
            <div className="teacher-list">
                
                            {
                                aulas.map((aula)=>{
                                    return (
                                        <TeacherItem 
                                        key={aula.user_id}
                                        name={aula.name}
                                        avatar={aula.avatar}
                                        bio={aula.bio}
                                        materia={aula.subject}
                                        whatsapp={aula.whatsapp}
                                        preco={aula.cost}
                                        user_id={aula.user_id}
                                        />   
                                    )
                                })
                            }
            </div>
        </div>
    )
}

export default TeacherList