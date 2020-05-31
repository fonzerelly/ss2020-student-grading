import React, {useState} from 'react';
import './Counter.css'

function Counter () {
    let [counter, setCounter] = useState(6);
    const inc = () =>{
        setCounter(++counter);
        console.log('###',counter)

    }
    const dec = () => {
        setCounter(--counter);
        console.log('###',counter)
    }

    const format = (counter) => {
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
            <span className={format(counter)}>{counter}</span>
            <button onClick={dec}>-</button>
        </span>
    );
}
export default Counter;