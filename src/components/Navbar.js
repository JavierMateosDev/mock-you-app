import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo-repo.png'
import { FaBars, FaTimes } from '/Users/Javier/IdeaProjects/mock-you-app/node_modules/react-icons/fa'

console.log(Logo);

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Link to="/" className="navbar-logo">
                    <img alt="LOGO" src={Logo} />
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            
            </div>
        </div>
    )
}

export default Navbar
