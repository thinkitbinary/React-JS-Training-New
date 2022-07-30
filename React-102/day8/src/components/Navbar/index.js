import React from 'react'
import './custom.css'

const Navbar = (props) => {
    return (
        <div className="navbar">{props.brandName}</div>
    )
}

export default Navbar