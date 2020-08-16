import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import TeacherForm from './pages/TeacherForm/TeacherForm'
import TeacherList from './pages/TeacherList/TeacherList'

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route  path="/give-classes" component={TeacherForm} />

        </BrowserRouter>
    )
}

export default Routes

