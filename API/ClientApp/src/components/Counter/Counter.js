import React from "react"
import './Counter.css'
import {observer} from "mobx-react-lite";
import counterStore from './../../store/CounterStore'

const Counter = observer(() => {
    return(
        <div className="counter">
            <h1 className="count-monitor">{counterStore.count}</h1>
            <button onClick={() => counterStore.increment()} className="test-btn">+</button>
            <button onClick={() => counterStore.decrement()} className="test-btn">-</button>
        </div>
    )
})

export default Counter