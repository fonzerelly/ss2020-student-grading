import React from 'react'
import Greet from './Greet'
import './App.css'
import Student from'./Student'

function App() {
  return (
    <div className="app">
      <h1>Student Grading<br/><Greet/></h1>

      <Student name="Max Mustermann" matriculation="123456" grade="3"/>
      <Student name="Sabine Selfie" matriculation="654321" grade="2"/>
    </div>
  )
}

export default App;