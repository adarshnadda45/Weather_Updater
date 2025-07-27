const button = document.getElementById("Search-btn");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-Time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=60300353162c4ba4917111515251205&q=${cityName}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);

  cityName.innerHTML = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = `${result.current.temp_c}°C`;
});

console.log("Weather Check by calling API");
console.log("wheather Check by Fetching the API ");
particlesJS.load("particles-js", "particles.json");
