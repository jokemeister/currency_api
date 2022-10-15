const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get(`/`, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log();

  const p24apiData = axios(
    // `https://api.privatbank.ua/p24api/exchange_rates?json&date=${req.query.date}`
    'https://api.privatbank.ua/p24api/exchange_rates?json&date=15.10.2022'
  );

  p24apiData.then((data) => {
    console.log(data.data);
    res.json(data.data);
  });
});

module.exports = app;
