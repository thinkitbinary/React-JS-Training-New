import React, { useState } from 'react'
import styles from './styles'

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [ todos, setTodos ] = useState([])

    const handleAddTodo = () =>{
        setTodos([...todos, todo ])
    }

    return (
        <div style={styles.counter}>
            <h2>ToDo Application</h2>
            <div>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={handleAddTodo}>add todo</button>
            </div>
            <div style={styles.main}>
                {todos.map((ele, index) => <h5 key={index}> {ele} </h5>)}
            </div>
        </div>
    )
}

export default Todo