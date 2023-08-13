export default function ShippingOptions({weightValue,setWeightValue,distanceValue,setDistanceValue,setWeightUnit, setTransportMethod,setDistanceUnit}) {
    return (
        <>

            <div className="vehicle-options">

                <div className="row">
                    <h1>Select a Transport Method</h1>
                    <select name="transport" id="transport-select" onChange={(e)=>setTransportMethod(e.target.value)} >
                        <option value="train">train</option>
                        <option value="truck">truck</option>
                        <option value="plane">plane</option>

                    </select>
                </div>

                <div className="row">
                    <h1>Select weight_unit</h1>
                    <select
                        name="shipping-unit"
                        id="shipping-unit-select"
                        onChange={(e)=>setWeightUnit(e.target.value)}


                    >
                        <option value="g">g</option>
                        <option value="lb">lb</option>
                        <option value="kg">kg</option>
                        <option value="mt">mt</option>
                    </select>
                </div>


                <div className="row">
                    <h1>Weight Value</h1>
                    <input
                        type="number" value={weightValue} min={1} onChange={(e)=>setWeightValue(e.target.value)}></input>
                </div>


                <div className="row">
                    <h1>Select Distance Unit</h1>
                    <select
                        name="distance-unit"
                        id="distance-unit-select"
                        onChange={(e)=>setDistanceUnit(e.target.value)}


                    >
                        <option value="mi">mi</option>
                        <option value="km">km</option>

                    </select>
                </div>


                <div className="row">
                    <h1>Distance Value</h1>
                    <input
                        type="number" value={distanceValue} min={1} onChange={(e)=>setDistanceValue(e.target.value)}></input>
                </div>

            </div>

        </>
    )
}