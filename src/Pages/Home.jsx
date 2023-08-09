import HeroSection from "../Components/HeroSection"
import UnitySection from "../Components/UnitySection"
import ServiceSection from "../Components/ServiceSection"
import InfoSection from "../Components/InfoSection"
import GoalSection from "../Components/GoalSection"
import Contact from "../Components/Contact"

export default function Home({toggleContact,setToggleContact}){
    return(
        <>
    
        <HeroSection toggleContact = {toggleContact} setToggleContact = {setToggleContact}/>
        <InfoSection/>
        <GoalSection/>
        <ServiceSection/>
        <UnitySection/>

        
        </>
    )
   
}