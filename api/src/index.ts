import express from 'express'
const  cors = require('cors') 

const app = express()
app.use(cors())


app.post('/register', (req, res) => {
    res.json('Typescript and node works fine')
})
app.listen(4000, () => {
    console.log('Running on 4000');
});