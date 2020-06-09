import React from 'react'
import Greet from './Greet'
import './App.css'
import StudentList from './StudentList'
import AverageGrade from './AverageGrade'
import {StudentProvider} from './StudentContext'
import AddStudent from './AddStudent'
function App() {
  
  return (
    <div className="app">
      <h1>Student Grading<br/><Greet/></h1>

      <StudentProvider>
        <StudentList/>
        <AverageGrade/>
        <AddStudent/>
      </StudentProvider>
      
    </div>
  )
}

export default App;