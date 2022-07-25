import React, { useState } from 'react'
import styles from './styles'

const Counter = () => {
    const [ value, setValue ] = useState(0)  // decalre state
    const [ user, setUser ] = useState({name:"Rahul", age:"24"})
    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div style={styles.counter}>
            <h2>Counter Application</h2>
            <div style={styles.main}>
                <button onClick={()=>setValue(value-1)}>Decrease</button>
                <h2>{value}</h2>
                <button onClick={()=>setValue(value+1)}>Increase</button>
            </div>
            <div>
                <input type="text" placeholder='enter text' name="name" value={user.name} onChange={(e)=>handleChange(e)} />
                <input type="text" placeholder='enter text' name="age" value={user.age} onChange={(e)=>handleChange(e)} />

                <p>Hello My name is <b>{user.name}</b> and age is <b>{user.age}</b> </p> 
            </div>
        </div>
    )
}

export default Counter