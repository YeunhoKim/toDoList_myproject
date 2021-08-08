const API_KEY = "34db59a4e51752a7ef6686db3f8f9ccd";

const onGeoOK = (position) => {
  const POSITION_KEY = position.coords;
  const lat = POSITION_KEY.latitude;
  const lon = POSITION_KEY.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityContainer = document.querySelector("#weather span:first-child");
      const tempContainer = document.querySelector(
        "#weather span:nth-child(2)"
      );
      const weatherContainer = document.querySelector(
        "#weather span:last-child"
      );

      const name = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;

      cityContainer.innerText = name;
      tempContainer.innerText = temp;
      weatherContainer.innerText = weather;
    });
};

const onGeoErr = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
