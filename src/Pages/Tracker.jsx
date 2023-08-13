import Vehicle from "../Components/CarbonTracking/Vechile/Vechicle"
import Shipping from "../Components/CarbonTracking/Shipping/Shipping"
import { useEffect } from "react";

export default function Tracker() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
   
    return (
        
        <>
            <Vehicle />
            <hr></hr>
            <hr></hr>
            < Shipping />

        </>
    )
}