import express from "express";


const app = express()

app.get('/test', (request, response) => {
    response.json('test ok')
})
app.listen(4000)