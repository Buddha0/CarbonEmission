import Causes from "../Components/AboutComponents/Causes"
import Chart from "../Components/AboutComponents/Chart"
import Geographically from "../Components/AboutComponents/Geographically"
import Background from "../Components/Background"
import Outcome from "../Components/AboutComponents/Outcome"


export default function Research({toggleContact,setToggleContact}) {



    return (
        <>
           <Background title = "Our Research" toggleContact = {toggleContact} setToggleContact = {setToggleContact}/>
            
            <div className="about-section-descriptions">
                <div className="flex">
                    <Geographically />
                    <Chart />
                </div>
                <Causes/>
                <Outcome/>
            </div>



        </>
    )
}