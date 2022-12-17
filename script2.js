//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/LOCATION?unitGroup=metric&key=YOUR_API_KEY&contentType=json
//my apikey = MV8BWB4YDNYQMXZUS26YTZKXV



// fetches the data and if any error, then throws warning
async function fetchWeather() {
    let latitude = sessionStorage.getItem("latitude");
    let longitude = sessionStorage.getItem("longitude");
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=MV8BWB4YDNYQMXZUS26YTZKXV&contentType=json`;

    try {
        const rawResponse = await fetch(url);
        const data = await rawResponse.json();
        console.log(data);
        console.log(data.resolvedAddress);
        return data;
    } catch (error) {
        document.getElementById('warning').innerHTML = `<div class="alert alert-danger" role="alert">
        Please Enter valid Location / token
      </div>`
    }

}


//updates the detauils and calls change_bg
async function updateDetails() {
    const data = await fetchWeather();

    document.getElementById("feels-like").innerText = `${data.currentConditions.feelslike} degree celsius`;
    document.getElementById("conditions").innerText = `Current Conditions : ${data.currentConditions.conditions}`;
    document.getElementById("temperature").innerText = `${data.currentConditions.temp} degree celsius`;
    document.getElementById("lat").innerText = data.latitude;
    document.getElementById("long").innerText = data.longitude;
    document.getElementById("TimeZone").innerText = data.timezone;
    document.getElementById("windspeed").innerText = `${data.currentConditions.windspeed} m/s`;
    document.getElementById("pressure").innerText = `${data.currentConditions.pressure} kPa`;
    document.getElementById("Humidity").innerText = `${data.currentConditions.humidity} %`;
    document.getElementById("wind-direction").innerText = `${data.currentConditions.winddir} degrees`;
    document.getElementById("UV").innerText = data.currentConditions.uvindex;

    change_bg(data);

}

// this function changes the background image according to the weather conditons
function change_bg(data) {
    if (data.currentConditions.conditions.includes("cloud")) {
        console.log("its cloudy");
        document.getElementById("body").style.backgroundImage = 'url(./clouds.webp)';
    } else if (data.currentConditions.conditions.includes("sun") || data.currentConditions.conditions.includes("Clear")) {
        console.log("its suny day");
        document.getElementById("body").style.backgroundImage = 'url(./sunny.jpg)';
    }
    else if (data.currentConditions.conditions.includes("rain")) {
        console.log("its rainy day");
        document.getElementById("body").style.backgroundImage = 'url(./rainy.jpg)';
    }
}

updateDetails();

// localStorage.clear();







