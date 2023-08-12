import React from "react";
import fetchCarbonEstimate from "./VechileCarbonEstimation";

export default function VehicleOptions({ VehicleCompanyModel,
  VehicleCompany,
  setVehicleCompanyId,
  setVehicleModelId,
  setUnits,
  distanceValue,
  setDistanceValue,


}) {

  return (
    <div className="vehicle-options">

      <div className="row">
        <h1>Select a Vehicle Company</h1>
        <select name="vehicles" id="vehicle-select" onChange={(e) => setVehicleCompanyId(e.target.value)}>

          {VehicleCompany?.map((company) => (
            <option
              key={company.data.id}
              value={company.data.id}
            >
              {company.data.attributes.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <h1>Select a Vehicle Model</h1>
        <select name="vehicles-model" id="vehicle-model-select" onChange={(e) => setVehicleModelId(e.target.value)}>

          {VehicleCompanyModel?.map((company) => (
            <option key={company.data.id} value={company.data.id}>
              {company.data.attributes.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <h1>Distance Unit</h1>
        <select
          name="vehicles-unit"
          id="vehicle-unit-select"
          onChange={(e) => setUnits(e.target.value)}

        >
          <option value="mi">mi</option>
          <option value="km">km</option>
        </select>
      </div>

      <div className="row">
        <h1>Distance Value</h1>
        <input
          type="number" value={distanceValue} onChange={(e) => setDistanceValue(e.target.value)} min={1}></input>
      </div>

    </div>

  );
}
