// import dbConnet from '../dbUtils/db'
import express, { response } from 'express'
const  cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/Users') 
const bcrypt = require('bcryptjs') //for password hashing

const app = express()

const salt = bcrypt.genSaltSync(10)

app.use(cors())
app.use(express.json())

//dbConnet()


app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    try{
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt)  //hashing password for users
        })
        res.json(userDoc)
    

    }catch(e){
        console.log(e)
        res.status(400).json(e)
    }
    });
        
app.listen(4000, () => {
    console.log('Running on 4000')
});


app.post('login', async (req, res) => {
    const {username, password} = req.body
    const userDoc = await User.findOne({username})
    const passOK = bcrypt.compareSync(password, userDoc.password) //PASSWORD FROM OUR REQUEST AND PASSWORD FROM DATABASE FROM USER
    response.json(passOK)
})
