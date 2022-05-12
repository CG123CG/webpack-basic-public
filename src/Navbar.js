import { NavLink } from 'react-router-dom'
import React from 'react'

function Navbar() {
    return (
        <div>
            <NavLink style={{ marginRight: "20px", fontSize: "25px" }} to="/">Home</NavLink>
            <NavLink style={{ fontSize: "25px" }} to="/shop">Shop</NavLink>
        </div>
    )
}

export default Navbar
