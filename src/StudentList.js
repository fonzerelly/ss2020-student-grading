
import React,{useContext} from 'react'

import Student from './Student'
import {StudentContext} from './StudentContext'

export default function StudentList () {
      const [students] = useContext(StudentContext)
    return (
        <div>{students.map((student, index) => (
            <Student index={index} key={index}/>
          ))}</div>
    )
}
