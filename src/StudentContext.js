import React, {createContext, useState} from 'react'
import './StudentContext.css'

export const StudentContext = createContext()

export function StudentProvider (props) {
    const [students, setStudents] = useState([{
        name: 'Norman Normalbürger',
        matriculation: '11223344',
        grade: 4
      }, {
        name: 'Susi Sonnenschein',
        matriculation: '28022978',
        grade: 2
      }])
    return (
        <StudentContext.Provider value={[students, setStudents]}  className="studentcontext">
            {props.children}
        </StudentContext.Provider>
    )
}