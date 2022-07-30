import React, { useEffect, useReducer, useRef, useState } from 'react'
import reducer from './reducers'
import styles from './styles'

const Counter = () => {
    // const [ value, setValue ] = useState(0)  // decalre state
    // const [ user, setUser ] = useState({name:"Rahul", age:"24", city:""})
    // const handleChange = (e) =>{
    //     console.log(e.target.name, e.target.value)
    //     setUser({...user, [e.target.name]:e.target.value})
    // }

    // const handleDecrease = () =>{
    //     setValue(value-1)
    // }
    // const handleIncrease = () =>{
    //     setValue(value+1)
    // }

    const [value, dispatch] = useReducer(reducer, {count:0})

    return (
        <div style={styles.counter}>
            {/* <h2>Counter Application using state</h2>
            <div style={styles.main}>
                <button onClick={handleDecrease}>Decrease</button>
                <h2>{value}</h2>
                <button onClick={handleIncrease}>Increase</button>
            </div> */}
            <h2>Counter Application using Reducer</h2>
            <div style={styles.main}>
                <button onClick={()=>dispatch('decrement')}>Decrease</button>
                <h2>{value.count}</h2>
                <button onClick={()=>dispatch('increment')}>Increase</button>
            </div>
            {/* <div>
                <input type="text" placeholder='enter text' name="name" value={user.name} onChange={(e)=>handleChange(e)} />
                <input type="text" placeholder='enter text' name="age" value={user.age} onChange={(e)=>handleChange(e)} />
                <p>Hello My name is <b>{user.name}</b> and age is <b>{user.age}</b></p> 
            </div> */}
        </div>
    )
}

export default Counter