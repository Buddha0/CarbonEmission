import {Link} from "react-router-dom"
import Nav from "./Nav"
import Background from "./Background"
export default function HeroSection({toggleContact, setToggleContact}) {

    return (
        <>



            <div className="hero-section-container">

                <div className="hero-section-description">
                    <h1>Track Your Impact</h1>
                    <h1>Reduce Your FootPrint</h1>
                    <p>Monitor emissions, embrace eco-actions. Contribute to a greener world through mindful choices and positive change.
                    </p>
                   <Link to = "/tracker"> <button>Start Tracking</button></Link>
                </div>
       
            </div>
              
    
        </>
    )
}