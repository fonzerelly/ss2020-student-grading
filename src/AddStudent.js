import React, {useContext} from 'react'
import {StudentContext } from './StudentContext'
export default function AddStudent () {
    const [students, setStudent] = useContext(StudentContext);
    function addStudent() {
        const newStudent = {
            name: "...",
            matriculation: "...",
            grade: 3.0
        }

    }
    return (
        <div>
            <h4>Add Student</h4>
            <div>
            <label for="name">
                Name: <input type="text" id="name" />
            </label>
            </div>
            <div>
            <label for="matriculation">
                Matriculation: <input type="text" id="matriculation" />
            </label>
            </div>
            <div>
            <label for="grade">
                Grade: <input type="text" id="grade" />
            </label>
            </div>
            <button onclick="addStudent">Add Student</button>
        </div>
    )
}