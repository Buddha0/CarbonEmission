import Causes from "../Components/AboutComponents/Causes"
import Chart from "../Components/AboutComponents/Chart"
import Geographically from "../Components/AboutComponents/Geographically"
import Background from "../Components/Background"


export default function About() {



    return (
        <>
           <Background title = "Our Research"/>
            
            <div className="about-section-descriptions">
                <div className="flex">
                    <Geographically />
                    <Chart />
                </div>
                <Causes/>
            </div>



        </>
    )
}