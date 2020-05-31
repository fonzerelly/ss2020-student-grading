import React from 'react'
import Counter from './Counter'

require('./Student.css')
const Student = ({name, matriculation, grade}) => (
    <div className="student">
        <div className="student__name">Student: {name}</div>
        <div>MatrikelNr: {matriculation}</div>
        <div>Note: <Counter/></div>
    </div>
)

export default Student;