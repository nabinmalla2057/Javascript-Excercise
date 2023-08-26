// // Weather API  using package axios and open source weather

// const axios = require("axios");
// const moment = require("moment");

// async function getWeather() {
//   try {
//     const response = await axios.get(
//     "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
//     );
//     const { data } = response;
//     const currentDateAndTime = new Date().toISOString();
//     console.log({ currentDateAndTime });
//     const { daily } = data;
//     const { sunrise, sunset } = daily;
//     const sr = moment(sunrise.toISOString()).format("LLLL");
//     const ss = moment(sunset.toISOString()).format("LLLL");
//     return { sunrise: sr, sunset: ss };
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function result() {
//   const sunStatus = await getWeather();
//   console.log({ sunStatus });
// }

const moment = require("moment");

const axios = require("axios");

async function getWeather() {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );
    const { data } = response;
    const { daily } = data;
    const { sunrise, sunset } = daily;
    const currentDateAndTime = new Date().toISOString();

    console.log({ currentDateAndTime });

    const sr = moment(sunrise.toString()).format("LLLL");
    const ss = moment(sunset.toString()).format("LLLL");

    return { sunrise: sr, sunset: ss };
  } catch (error) {
    console.error(error);
  }
}
async function result() {
  const sunStatus = await getWeather();
  console.log({ sunStatus });
}

result();

// const axios = require("axios");
// const moment = require("moment");

// async function getWeather() {
//   try {
//     const response = await axios.get(
//       "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
//     );

//     const temperatureData = response.data;
//     const currentTimeIndex = moment().hour();
//     const currentTemperature =
//       temperatureData.hourly.temperature_2m[currentTimeIndex];
//     const currentDate = moment().format("YYYY-MM-DD");

//     console.log(`Current Date: ${currentDate}`);
//     console.log(`Current Temperature: ${currentTemperature}°C`);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// getWeather();
