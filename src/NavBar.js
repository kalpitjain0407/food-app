import React from 'react'
import {Link} from 'react-router-dom'
import Cart from './Cart.js'

const NavBar=()=> {
    return (
        <div>
            {/* <nav class="nav">
                <Link to="/favorites"><a class="nav-link active" href="">Favorites</a></Link>
            </nav> */}
            <nav class="navbar navbar-light bg-dark">
                <span class="navbar-brand mb-0 h1">
                    <Link to="/favorites">
                        <a class="nav-link active" href="">Favorites</a>
                    </Link>
                </span>
                <Cart />
            </nav>
        </div>
    )
}

export default NavBar