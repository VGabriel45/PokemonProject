import React, {useState} from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    const [state, setState] = useState({ customColor: false})

    function switchTheme() {
        setState({customColor: !state.customColor})
    }

    return (
        <div className={state.customColor && 'customBackground'}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <a class="navbar-brand">Pokemon App </a>
            </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/pokemons">
                            <li class="nav-item active nav-link">
                                Pokemons
                            </li>
                        </Link>
                        <Link to="/types">
                            <li class="nav-item nav-link">
                                Types
                            </li>
                        </Link>
                        <li class="nav-item">
                            <button class="nav-link" onClick={switchTheme}>Change Theme</button>
                        </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
