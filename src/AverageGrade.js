import React, {useContext} from 'react'
import {StudentContext} from './StudentContext'
export default function AverageGrade () {
    const [students] = useContext(StudentContext)
    let sum = 0;
    students.forEach(({grade}) => {
        sum += grade
    })
    const averageGrade = sum / students.length
    return (
        <h1>AverageGrade: {averageGrade}</h1>
    )
}