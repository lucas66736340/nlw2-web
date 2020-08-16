import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import warningIcon from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea/TextArea'
import Select from '../../components/Select/Select'

import api from '../../services/api'

import './TeacherForm.css'
function TeacherForm(){

    const history = useHistory()

    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [bio,setBio] = useState('')
    const [materia,setMateria] = useState('')
    const [custo,setCusto] = useState('')


    const [horario,setHorario] = useState([{
        week_day:'',
        from:'',
        to:''
    }])

    function addNovoHorario(){
        setHorario([
            ...horario,
            {
                week_day:'',
                from:'',
                to:''
            }
        ])
    }

  async  function criarNovaAula(e){
        e.preventDefault()

        const response = await api.post('/classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject:materia,
            cost:custo,
            horario_aula:horario
        })
       
      
        alert(response.data.message)
        history.push('/')
    }

    function  setValorHorario(indice,campo,valor){
        const newArray = horario.map((item,index)=>{
            if(index === indice){
                return{
                    ...item,
                    [campo]:valor
                }

            }
            return item
        })
        setHorario(newArray)

    }

    return (
        <div id="page-teacher-form" className="container">
            <Header 
            description="O primeiro passo e prencher esse formulario de inscricao"
             title="É incrivel que voce queira dar aulas"
             />
             <main>
                 <form onSubmit={criarNovaAula}>
                 <fieldset>
                     <legend>Seus dados</legend>

                        <Input  value={name}
                         onChange={(e)=>{
                            setName(e.target.value)
                         }}
                         type="text"
                          name="name" 
                          label="Nome Completo"
                           />
                          

                        <Input
                          onChange={(e)=>{
                            setAvatar(e.target.value)
                         }}
                         value={avatar}
                          type="text"
                           name="avatar" 
                           label="Avatar"
                            />
                     
                        <Input 
                          onChange={(e)=>{
                            setWhatsapp(e.target.value)
                         }}
                        value={whatsapp}
                         type="text" 
                         name="whatsapp" 
                         label="Whats app"
                          />
                        

                        <TextArea 
                        onChange={(e)=>{
                        setBio(e.target.value)
                        }}
                         name="biografia"
                          label="Biografia" 
                          value={bio}

                          /> 
                        
                     
                 </fieldset>
                 <fieldset>
                     <legend>Sobre a  aula</legend>

                        < Select
                            placeholder="Selecione qual você quer ensinar"
                            type="text"
                            name="materia"
                            label="Matéria"
                            value={materia}
                            onChange={(e)=>{
                                setMateria(e.target.value)
                             }}
                            options={[
                                {value:'Artes',label:'Artes'},
                                {value:'Biologia',label:'Biologia'},
                                {value:'Matematica',label:'Matematica'},
                                {value:'Portugues',label:'Portugues'},
                                {value:'Quimica',label:'Quimica'},
                                {value:'Geografia',label:'Geografia'},
                                {value:'Fisica',label:'Fisica'},
                                {value:'Filosofia',label:'Filosofia'},
                            ]}
                            />
                           

                        <Input type="text"
                         name="custo"
                          label="Custo da sua hora por aula"
                            value={custo}
                            onChange={(e)=>{
                                setCusto(e.target.value)
                             }}
                          />
                        
                   
                       
                     
                 </fieldset>
                 <fieldset>
                     <legend>
                         Horarios disponiveis
                         <button onClick={addNovoHorario} type="button">+ novo horario</button>
                     </legend>

                            {
                                horario.map((item,index)=>{
                                    return(
                                        <div key={item.week_day} className="horario-item">
                                        < Select
                                        placeholder="Escolha um dia"
                                        type="text"
                                        name="dia-semana"
                                        label="Dia da semana"
                                        value={item.week_day}
                                        onChange={(e)=>{
                                            setValorHorario(index,'week_day',e.target.value)
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
                                        <Input 
                                          name="from"
                                         label="Das"
                                          type="time"
                                          value={item.from}
                                          onChange={(e)=>{
                                            setValorHorario(index,'from',e.target.value)
                                        }}
                                        />
                                        <Input 
                                        name="to"
                                         label="Até" 
                                        type="time"  
                                        value={item.to}
                                        onChange={(e)=>{
                                            setValorHorario(index,'to',e.target.value)
                                        }}
                                        />
                                    </div>
                                    )
                                })
                                
                            }
                          
                            
                 </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt=""/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button>
                        Salvar Cadastro
                    </button>

                </footer>

                </form>
             </main>
        </div>
    )
}

export default TeacherForm