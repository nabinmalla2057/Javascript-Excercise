// Weather API  using package axios and open source weather

const axios = require("axios");
const moment= require("moment");

async function getWeather(){
    try {
        const response =await axios.get(
            "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"

        );
        const{data} = response;
        const currentDateAndTime = new Date().toISOString();
        console.log

    }
}