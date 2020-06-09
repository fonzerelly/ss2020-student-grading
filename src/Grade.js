import React, {useContext} from 'react';
import './Counter.css'
import {StudentContext} from './StudentContext'

function Grade ({index}) {
    const [students, setStudents] = useContext(StudentContext);
    const counter = students[index].grade;
    const inc = () =>{
        const newStudents = [...students]
        newStudents[index].grade += 1;
        setStudents(newStudents);

    }
    const dec = () => {
        const newStudents = [...students]
        newStudents[index].grade -= 1;
        setStudents(newStudents);
    }

    const format = () => {
        console.log('!!!', counter)
        if (counter <= 2) {
            return 'counter-positive'
        } else if (counter >= 5) {
            return 'counter--critical'
        } else {
            return 'counter--normal'
        }
    }
    return (
        <span>
            <button onClick={inc}>+</button>
            <span className={format()}>{counter}</span>
            <button onClick={dec}>-</button>
        </span>
    );
}
export default Grade;