import React, {useState} from 'react'
import Student from './Student'
import './StudentList.css'
function StudentList () {
    const [students] = useState([{
        name: 'Norman Normalbürger',
        matriculation: '11223344'
      }, {
        name: 'Susi Sonnenschein',
        matriculation: '28022978'
      }])
    return (<div class="studentlist">
    
        {students.map((student, index) => (
            <Student name={student.name} matriculation={student.matriculation} key={index}/>
        ))}
    </div>)
}
export default StudentList;