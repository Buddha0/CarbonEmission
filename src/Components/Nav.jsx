import { useState } from "react"
import { NavLink } from "react-router-dom"
export default function Nav({ toggleContact, setToggleContact }) {

    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav>
                <h1 className="logo">Stellar</h1>

                <ul className={toggle ? "ul-show" : ""}>
                    <NavLink to="/" className={"link"}><li>Home</li></NavLink>
                    <NavLink to="/tracker" className={"link"}><li>Tracker</li></NavLink>
                    <NavLink to="/research" className={"link"}>     <li>Research</li></NavLink>
                    <li onClick={() => setToggleContact(!toggleContact)}>Contact</li>
                </ul>
                <i className="fa-solid fa-bars" onClick={() => setToggle(!toggle)}></i>
            </nav>

        </>
    )
}