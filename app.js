const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors())

app.get(`/`, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const p24apiData = axios(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${req.query.date}`)
  
  p24apiData.then(data => res.json(data.data));
  
})

module.exports = app;