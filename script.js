const timeLoader = document.querySelector(".time-loader");
const weatherLoader = document.querySelector(".weather-loader");
const timeContainer = document.querySelector(".time-container");
const weatherContainer = document.querySelector(".weather-container");

// show loading for time Loader
function loadingTime() {
  timeLoader.hidden = false; // loader shown
  timeContainer.hidden = true;
}

// show loading for weather  Loader
function loadingWeather() {
  weatherLoader.hidden = false; // loader hidden
  weatherContainer.hidden = true;
}

// Hide  time loading
function completeTime() {
  timeLoader.hidden = true; // loader hidden
  timeContainer.hidden = false;
}

// Hide  weather loading
function completeWeather() {
  weatherLoader.hidden = true; // loader hidden
  weatherContainer.hidden = false;
}

// show loader
loadingTime();
loadingWeather();

// code to fetch unspash stuff
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    console.log(data.location.name);
    if (data.location.name !== null) {
      document.getElementById("author").innerHTML = `
      <p class="author-name"><a href=${data.user.links.html}>${data.user.name}</a></p>
      <p class="photo-location">${data.location.name}</p>`;
    } else {
      document.getElementById("author").innerHTML = `
      <p><a href=${data.user.links.html}>${data.user.name}</a></p>`;
    }
  })
  .catch((error) => {
    //   default background img
    document.body.style.backgroundImage = `url(https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature)`;

    document.getElementById("author").textContent = `Dodi Achmad`;
  });

// code to get crypto details
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-details").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
    document.getElementById("crypto").innerHTML += `
            <p>🎯: £${data.market_data.current_price.gbp}</p>
            <p>👆: £${data.market_data.high_24h.gbp}</p>
            <p>👇: £${data.market_data.low_24h.gbp}</p>
        `;
  })
  .catch((err) => console.error(err));

//   get time to fill web page
function getUpdatedTime() {
  completeTime();
  const today = new Date();
  document.querySelector(".time").textContent = today.toLocaleTimeString(
    "en-US",
    { timeStyle: "short" }
  );
}

setInterval(getUpdatedTime, 1000);

async function getQuote() {
  const response = await fetch("https://api.kanye.rest");

  if (!response.ok) {
    const message = `error, can't fetch quotes: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  document.querySelector(".quote").innerHTML = `
  <h3>${data.quote}</h3>
  <p>...Kanye West</p>`;
}

getQuote().catch((err) => {
  err.message; //error , can't fetch quotes
});
// get geolocation for weather side
navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${config.API_KEY}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error("Weather data not available");
      }
      return response.json();
    })
    .then((data) => {
      completeWeather();
      document.getElementById("weather").innerHTML = `
        <img src="http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" >
        <p class="weather-temp">${Math.round(data.main.temp)}˚C</p>
        <p class="weather-city">${data.sys.country}, <span >${
        data.name
      }</span></p>`;
    })
    .catch((err) => console.error(err));
});

// ? centre the kanye quotes
// TODO add sports feature instead of crypto coins
// TODO add prayer times API_KEY
// TODO deploy
// TODO practise parallel fetch requests (https://dmitripavlutin.com/javascript-fetch-async-await/)
