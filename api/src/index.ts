import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send('Typescript and node works fine')
})
app.listen(4321, () => {
    console.log('Running on 4321');
});