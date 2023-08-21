

const apiKey = 'fSGqoCjV9HO2tI11mdOGQ';
const apiUrl = 'https://www.carboninterface.com/api/v1/estimates';



const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
};

export default async function fetchShippingEstimate(weightValue,weightUnit, distanceValue,distanceUnit,transportMethod)

{
    try {
        const requestData = {
         
            type: "shipping",
            weight_value: weightValue,
            weight_unit: weightUnit,
            distance_value: distanceValue,
            distance_unit: distanceUnit,
            transport_method: transportMethod,
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

