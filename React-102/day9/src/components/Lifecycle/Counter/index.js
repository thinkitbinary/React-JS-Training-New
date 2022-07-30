import React, { useEffect, useState } from 'react'
import styles from './styles'

const Counter = () => {
    const [value, setValue] = useState(0)  // decalre state
    const [user, setUser] = useState({ name: "Rahul", age: "24" })

    // mount
    // update
    // unmount

    // useEffect(()=>{ alert("Mounted")}) // mount on every state or prop update and a default mount
    // useEffect(()=>{ alert("Mounted") }, []) // only default mount
    // useEffect(()=>{ alert("Mounted") }, [user]) // Default mount and depenedent on state updates which are mentioned in dependency array
    // useEffect(()=>{
    //     alert("Welcome User")
    //     return ()=>{ alert("Un Mounted")} //cleanup function to unsubscribe events and side effects
    // }, [value]) 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    }, [value])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div style={styles.counter}>
            <h2>Counter Application</h2>
            <div style={styles.main}>
                <button onClick={() => setValue(value - 1)}>Decrease</button>
                <h2>{value}</h2>
                <button onClick={() => setValue(value + 1)}>Increase</button>
            </div>
            <div>
                <input type="text" placeholder='enter text' name="name" value={user.name} onChange={(e) => handleChange(e)} />
                <input type="text" placeholder='enter text' name="age" value={user.age} onChange={(e) => handleChange(e)} />

                <p>Hello My name is <b>{user.name}</b> and age is <b>{user.age}</b> </p>
            </div>
        </div>
    )
}

export default Counter