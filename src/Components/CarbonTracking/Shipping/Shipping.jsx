import { useState } from "react"
import fetchShippingEstimate from "./ShippingApi"
import ShippingOptions from "./ShippingOptions"
export default function Shipping() {

    const [shippingEstimation, setShippingEstimation] = useState(null)
    const [weightValue, setWeightValue] = useState(300)
    const [distanceValue, setDistanceValue] = useState(2000)
    const [transportMethod, setTransportMethod] = useState("train")
    const [weightUnit, setWeightUnit] = useState("g")
    const [distanceUnit, setDistanceUnit] = useState("mi")



    async function handleEstimateClick() {
        try{
            const estimationData = await fetchShippingEstimate(weightValue,weightUnit,distanceValue,distanceUnit, transportMethod)
            setShippingEstimation(estimationData)
        }
        catch(error){
            console.log("error: " ,error)
        }
    
         }
  
    return (
        <>


            <div className="vehicle-carbon-tracking-section">
                <div className="vehicle-options-container">

                    <ShippingOptions weightValue={weightValue}
                     setWeightValue={setWeightValue}
                      distanceValue={distanceValue} 
                      setDistanceValue={setDistanceValue} 
                      setTransportMethod = {setTransportMethod}
                      setDistanceUnit = {setDistanceUnit}
                      setWeightUnit = {setWeightUnit}/>
                    <button onClick={handleEstimateClick} className="result">Estimate Carbon Emission</button>

                </div>
                <div className="vechile-carbon-emission-result">
                    {shippingEstimation ? <>
                        <h1>Your Carbon FootPrint For Shipping</h1>
                        <div className="main-results">
                            <p>Estimated Carbon Emission in kg: {shippingEstimation?.data?.attributes?.carbon_kg} kg</p>
                            <p>Estimated Carbon Emission in g: {shippingEstimation?.data?.attributes?.carbon_g} g</p>
                            <p>Estimated Carbon Emission in lb: {shippingEstimation?.data?.attributes?.carbon_lb} lb</p>
                            <p>Estimated Carbon Emission in mt: {shippingEstimation?.data?.attributes?.carbon_mt} mt</p>
                        </div>
                        <div className="sub-results">
                            <p>Transport Method: {shippingEstimation?.data?.attributes?.transport_method}</p>
                            <p>Weight Unit: {shippingEstimation?.data?.attributes?.weight_unit}</p>
                            <p>Weight Value: {shippingEstimation?.data?.attributes?.weight_value}</p>
                            <p>Distance Unit: {shippingEstimation?.data?.attributes?.distance_unit}</p>
                            <p>Distance Value: {shippingEstimation?.data?.attributes?.distance_value}</p>
                   
                        </div>

                    </>
                        :
                        <>
                            <h1>Your Carbon FootPrint For Shipping ??</h1>
                            <img src="https://i.pinimg.com/474x/5b/cd/74/5bcd740e25d4b46b5b242275df618005.jpg" className="question"></img>
                        </>}


                </div>
            </div>

        </>
    )
}