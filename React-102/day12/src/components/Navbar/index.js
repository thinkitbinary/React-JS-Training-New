import React from 'react'
import './custom.css'
import { useSelector } from 'react-redux/es/exports'

const Navbar = () => {
    const brandName = useSelector(state=> state.navbar.data)
    const todos = useSelector(state=> state.todos.data)
    return (
        <div className="navbar">
            {brandName}
            <div>{todos.length}</div>
        </div>
    )
}

export default Navbar