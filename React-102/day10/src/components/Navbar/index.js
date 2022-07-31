import React from 'react'
import './custom.css'
import { useSelector } from 'react-redux/es/exports'

const Navbar = () => {
    const brandName = useSelector(state=> state.navbar.data)
    return (
        <div className="navbar">{brandName}</div>
    )
}

export default Navbar