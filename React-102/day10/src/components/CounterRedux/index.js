import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../features/counter/counterSlice'
import { updateBrandName } from '../../features/navbar/navbarSlice'
import styles from './styles'

const CounterRedux = () => {
    const state = useSelector(state=> state)
    console.log(state)
    const counter = useSelector(state => state.counter.value)
    const brandName=useSelector(state => state.navbar.data)  // access store state
    const dispatch = useDispatch()
    return (
        <div style={styles.counter}>
            <h2>Counter Application using Redux - {brandName}</h2>
            <div style={styles.main}>
                <button onClick={()=>dispatch(decrement())}>Decrease</button>
                <h2>{counter}</h2>
                <button onClick={()=>dispatch(increment())}>Increase</button>
                <button onClick={()=>dispatch(incrementByAmount(5))}>Increase by Amount 5</button>
                <br />
                <button onClick={()=>dispatch(updateBrandName("My App"))}>Change Navbar name to "My App"</button>
            </div>
        </div>
    )
}

export default CounterRedux