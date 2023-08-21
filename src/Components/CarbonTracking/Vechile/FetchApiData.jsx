const apiKey = 'fSGqoCjV9HO2tI11mdOGQ';
const apiUrl = 'https://www.carboninterface.com/api/v1/';
const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};


export async function fetchCarsApiData(url) {
  try {
    const response = await fetch(`${apiUrl}${url}`, { headers })
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log("error is : ", error)
  }

}



