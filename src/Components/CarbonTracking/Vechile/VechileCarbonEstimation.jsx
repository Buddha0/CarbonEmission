

const apiKey = 'wmXde88p51fChxcz0Fp4bA';
const apiUrl = 'https://www.carboninterface.com/api/v1/estimates';



const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
};

export default async function fetchCarbonEstimate(distanceUnit, distanceValue, vehicleModelId) {
    try {
        const requestData = {
            type: 'vehicle',
            distance_unit: distanceUnit,
            distance_value: distanceValue,
            vehicle_model_id: vehicleModelId
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data

    } catch (error) {

        console.error('Error:', error);
    }
}

