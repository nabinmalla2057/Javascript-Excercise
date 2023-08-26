// // Weather API  using package axios and open source weather

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
