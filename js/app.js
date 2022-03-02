const API_KEYS = `2d46146a2d3498de1680a828c5b548d6`
const searchTemperator = () => {
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then (data => displayTemperater(data))
}

const setInnerText  = (id, text ) => {
    document.getElementById(id).innerText = text;
}

const displayTemperater = temperator =>{
    setInnerText('city-location', temperator.name)
    setInnerText('temperature', temperator.main.temp)
    setInnerText('condition', temperator.weather[0].main)
    console.log(temperator)
    
}