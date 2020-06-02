import React, {useState} from 'react'
import Greet from './Greet'
import './App.css'
import Student from'./Student'

function App() {
  const [students] = useState([{
    name: 'Norman Normalbürger',
    matriculation: '11223344'
  }, {
    name: 'Susi Sonnenschein',
    matriculation: '28022978'
  }])
  return (
    <div className="app">
      <h1>Student Grading<br/><Greet/></h1>

      {students.map((student) => (
        <Student name={student.name} matriculation={student.matriculation}/>
      ))}
      
    </div>
  )
}

export default App;