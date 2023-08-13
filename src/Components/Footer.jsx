import { NavLink } from "react-router-dom"
export default function Footer({toggleContact,setToggleContact}) {
    return (
        <>

            <footer>
                
                <h1 className="logo">Stellar</h1>

                <ul className= "ul-show">
                    <NavLink to="/" className={"link"}><li>Home</li></NavLink>
                    <NavLink to="/tracker" className={"link"}><li>Tracker</li></NavLink>
                    <NavLink to="/research" className={"link"}>     <li>Research</li></NavLink>
                    <li onClick={() => setToggleContact(!toggleContact)}>Contact</li>
                </ul>
            </footer>
        </>
    )
}