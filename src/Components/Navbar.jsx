import { NavLink } from "react-router-dom"

export const Navbar =() => {
    return(
    <>
    <header>
        <div className="container">
            <div className="logo-brand">
                <a href="/">Vishal</a>
            </div>
            <nav>
                <ul>
                    <li> <NavLink href="/">Home</NavLink></li>
                    <li> <NavLink href="/about">About</NavLink></li>
                    <li> <NavLink href="/contact">Contact</NavLink></li>
                    <li> <NavLink href="/service">Service</NavLink></li>
                    <li> <NavLink href="/login">Login</NavLink></li>
                    <li> <NavLink href="/register">Register</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>    
    </>
    )
}