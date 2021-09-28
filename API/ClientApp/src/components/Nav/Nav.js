import React from "react"
import './Nav.css'

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav-item nav-logo">
                Template app
            </div>
            <span className="spacer"/>
            <div className="nav-item">
                Login
            </div>
            <div className="nav-item">
                Register
            </div>
        </div>
    )
}

export default Nav