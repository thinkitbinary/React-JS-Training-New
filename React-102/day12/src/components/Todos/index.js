import React, { useState } from 'react'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { addTodo, deleteTodo, updateTodo } from '../../features/todos/todosSlice'

const initialActivityData = { activityName: "", targetDate: "", completed: false }

const Todos = () => {
    const [activity, setActivity] = useState(initialActivityData) // ActivityState
    // const [todos, setTodos] = useState([])  // todos state

    const todos = useSelector(state => state.todos.data)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setActivity({ ...activity, [e.target.name]: e.target.value }) //{ targetDate:"2022-07-28", activityName: "Coding"}
    }

    // add todo
    const handleAddTodo = () => {
        const id = new Date().getTime()
        dispatch(addTodo({...activity, id}))
        // setTodos([...todos, { ...activity, id }])
    }

    // toggle activity completed state
    const handleToggleActivity = (activityId) => {
        const _todos = todos.map(ele =>    // modified list of todos
            ele.id === activityId
                ?
                { ...ele, completed: !ele.completed }  // modifying current activity object 
                :
                ele
        )
        dispatch(updateTodo(_todos))
        // setTodos([..._todos])
    }

    // delete activity
    const deleteActivity = (activityId) => {
        dispatch(deleteTodo(activityId))
        // const _todos = todos.filter(ele => ele.id !== activityId ) // filtering todos !activity id
        // setTodos([..._todos])
    }

    return (
        <div style={styles.counter}>
            <h2>ToDo Application</h2>
            <div style={{ display: "flex", gap: "1rem", height: "2rem" }}>
                <input type="text" name="activityName" value={activity.activityName} onChange={handleChange} />
                <input type="date" name="targetDate" value={activity.targetDate} onChange={handleChange} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div style={styles.main}>
                {
                    todos.length > 0
                        ?
                        todos.map((ele) =>
                            <div key={ele.id} style={{
                                width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", height: "2rem",
                                borderBottom: ele.completed ? "1px solid green" : "1px solid gray",
                                backgroundColor: ele.completed ? "lightgreen" : "lightgray"
                            }}>
                                <div>{ele.activityName}</div>
                                <div>{ele.targetDate}</div>
                                <div onClick={() => handleToggleActivity(ele.id)} style={{ cursor: "pointer" }}>{ele.completed ? "Completed" : "Not Completed"}</div>
                                <div onClick={() => deleteActivity(ele.id)} style={{ color: 'red' }}> X </div>
                            </div>
                        )
                        :
                        "No Activities Planned Yet"
                }
            </div>
        </div>
    )
}

export default Todos