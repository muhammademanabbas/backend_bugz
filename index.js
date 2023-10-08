require('dotenv').config()

const express = require('express')
// import { express } from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('First server')
})
app.get('/twitter', function (req, res) {
  res.send('twitter page')
})
app.get('/facebook', function (req, res) {
  res.send('facebook page')
})
app.get('/bugz', function (req, res) {
  res.send('<h2>Bugz Here</h2>')
})

app.listen(process.env)