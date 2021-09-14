api_kye = `8cf1535d60c84659be8f41207847df03`;
const searchFunction = () => {
    const cityName = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_kye}`;

    fetch(url)
        .then(res => res.json())
        .then(data => DisplayTemperature(data))

}

const innerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const DisplayTemperature = temperature => {
    innerText('city', temperature.name);
    innerText('Tempera', temperature.main.temp);
    innerText('condition', temperature.weather[0].main);
    innerText('humidityTem', temperature.main.humidity);


    //weatherIcon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}