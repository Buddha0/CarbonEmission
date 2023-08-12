import React, { useEffect, useState } from "react";
import VehicleOptions from "./VechileOptions";
import { fetchCarsApiData } from "./FetchApiData";
import Background from "../../Background";
import fetchCarbonEstimate from "./VechileCarbonEstimation";




export default function Vehicle() {
  const [VehicleCompany, setVehicleCompany] = useState([]);
  const [VehicleCompanyId, setVehicleCompanyId] = useState("5f266411-5bb1-4b91-b044-9707426df630");
  const [VehicleCompanyModel, setVehicleCompanyModel] = useState(null);
  const [vehicleModelId, setVehicleModelId] = useState("7268a9b7-17e8-4c8d-acca-57059252afe9");
  const [units, setUnits] = useState("mi")
  const [distanceValue, setDistanceValue] = useState(100)
  const [carbonEstimation, setCarbonEstimation] = useState(null)
  console.log(carbonEstimation)


  async function fetchVehicleCompanyData() {
    try {
      setVehicleCompany(await fetchCarsApiData("vehicle_makes"));

    } catch (error) {
      console.error("Error fetching car company: ", error);
    }
  }


  useEffect(() => {
    fetchVehicleCompanyData();
  }, []);

  async function fetchVehicleModelData() {
    try {
      if (VehicleCompanyId !== null) {
        setVehicleCompanyModel(
          await fetchCarsApiData(`vehicle_makes/${VehicleCompanyId}/vehicle_models`)
        );
      }
    } catch (error) {
      console.log("Error fetching car model: ", error);
    }
  }

  useEffect(() => {
    fetchVehicleModelData();
  }, [VehicleCompanyId]);


  const handleEstimateClick = async () => {
    try {
      const estimationData = await fetchCarbonEstimate(units, distanceValue, vehicleModelId);
      setCarbonEstimation(estimationData);
    } catch (error) {
      console.error("Error fetching carbon estimate:", error);
    }
  };

  return (
    <>
      < Background title="Carbon Tracking" />

      <div className="vehicle-carbon-tracking-section">
        <div className="vehicle-options-container">

          <VehicleOptions VehicleCompanyModel={VehicleCompanyModel}
            VehicleCompany={VehicleCompany}
            setVehicleCompanyId={setVehicleCompanyId}
            setVehicleModelId={setVehicleModelId}
            setUnits={setUnits}
            setDistanceValue={setDistanceValue}
            distanceValue={distanceValue}

          />
          <button onClick={handleEstimateClick}>Estimate Carbon Emission</button>

        </div>
        <div className="vechile-carbon-emission-result">
          {carbonEstimation ? <>
            <h1>Your Carbon FootPrint</h1>
            <div className="main-results">
              <p>Estimated Carbon Emission in kg: {carbonEstimation?.data.attributes.carbon_kg} kg</p>
              <p>Estimated Carbon Emission in g: {carbonEstimation?.data.attributes.carbon_g} g</p>
              <p>Estimated Carbon Emission in lb: {carbonEstimation?.data.attributes.carbon_lb} lb</p>
              <p>Estimated Carbon Emission in mt: {carbonEstimation?.data.attributes.carbon_mt} mt</p>
            </div>
            <div className="sub-results">
              <p>Vehicle Make: {carbonEstimation?.data.attributes.vehicle_make}</p>
              <p>Vehicle Model: {carbonEstimation?.data.attributes.vehicle_model}</p>
              <p>Vehicle Year: {carbonEstimation?.data.attributes.vehicle_year}</p>
              <p>Distance Unit: {carbonEstimation?.data.attributes.distance_unit}</p>
              <p>Distance Value: {carbonEstimation?.data.attributes.distance_value}</p>
            </div>


          </> :
            <>
              <h1>Your Carbon FootPrint</h1>
              <img src="question.png" className="question"></img>
            </>}





        </div>
      </div>





    </>
  );
}
