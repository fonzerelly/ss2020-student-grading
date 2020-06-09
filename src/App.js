import React, {useState} from 'react'
import './App.css'
import StudentList from './StudentList'
import Greet from './Greet'

function App() {
  return (
    <div className="app">
      <h1>Student Grading<br/><Greet/></h1>
      <StudentList/>
    </div>
  )
}

export default App;