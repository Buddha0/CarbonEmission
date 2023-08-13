import {Link} from "react-router-dom"
import Nav from "./Nav"
import Background from "./Background"
export default function HeroSection({toggleContact, setToggleContact}) {

    return (
        <>



            <div className="hero-section-container">
            <Nav toggleContact = {toggleContact} setToggleContact = {setToggleContact}/>
                <div className="hero-section-description">
                    <h1>Track Your Impact</h1>
                    <h1>Reduce Your FootPrint</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quibusdam maiores magni necessitatibus delectus ducimus rem temporibus esse aut et!
                    </p>
                   <Link to = "/tracker"> <button>Start Tracking</button></Link>
                </div>
       
            </div>
              
    
        </>
    )
}