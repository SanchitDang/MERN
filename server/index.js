// Express + Node
// to start 'npm run dev'

//import express from 'express'        --ES6
//or
const express = require('express')

const app = express ()


app.get('/hello', (req, res) => {
    res.send('hola')
})

app.listen(1337, () => {
    console.log('sever started on prot 1337')
})
