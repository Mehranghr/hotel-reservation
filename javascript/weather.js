class Weather {
    constructor(city) {
        this.city = document.querySelector("#city").value;
        this.cityName = document.querySelector("#cityName");
        this.temp = document.querySelector("#temp");
        this.description = document.querySelector("#description");
        this.image = document.querySelector("#image");
        this.main = document.querySelector("#main");
    }
    async getWeatherAsync() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=cad7ec124945dcfff04e457e76760d90`);
        if (!response.ok) {
            alert("city not found");
        } 
        else {
            var data = await response.json();
            this.cityName.innerHTML = data.name;
            this.temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            this.main.innerHTML = data.weather[0].main;
            this.description.innerHTML = data.weather[0].description;
            this.image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
        return "finish!";
    }

    getWeather() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=cad7ec124945dcfff04e457e76760d90`);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status === 404) {
                alert("Place not found");
            } else {
                var data = JSON.parse(xhr.response);
                this.cityName.innerHTML = data.name;
                this.temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
                this.main.innerHTML = data.weather[0].main;
                this.description.innerHTML = data.weather[0].description;
                this.image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
        };
    }
}

const weather = new Weather();
weather.getWeather();
weather.getWeatherAsync().then(results => {
        console.log(results);
});
 document.querySelector("#send-form").onsubmit = (e) => {
     e.preventDefault();
    weather.city = document.querySelector("#city").value;
    weather.getWeather();
 };