import React,{useContext} from 'react'
import Grade from './Grade'
import {StudentContext} from './StudentContext'

require('./Student.css')
const Student = ({index}) => {
    const [students] = useContext(StudentContext)
    const {name, matriculation} = students[index]
    return (
    <div className="student">
        <div className="student__name">Student: {name}</div>
        <div>MatrikelNr: {matriculation}</div>
        <div>Note: <Grade index={index}/></div>
    </div>
)}

export default Student;