// import dbConnet from '../dbUtils/db'
import express, { response } from 'express'
import { isToken } from 'typescript'
const  cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/Users') 
const bcrypt = require('bcryptjs') //for password hashing
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadfileMiddlewaer = multer({ dest: 'uploads/'})

const app = express()

const salt = bcrypt.genSaltSync(10)
const secret = 'jhfhfjfnffkfjdhjsseije'

app.use(cors({Credential:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())
//dbConnet()


mongoose.connect('mongodb+srv://blog:london123@cluster0.e3nvvsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


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
        


app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const userDoc = await User.findOne({username})
    const passOK = bcrypt.compareSync(password, userDoc.password) //PASSWORD FROM OUR REQUEST AND PASSWORD FROM DATABASE FROM USER
    if (passOK) {
        // login with right authentication and set request header cookie to expire after an hour
        jwt.sign({ username, id:userDoc._id}, secret, {}, (err: any, token: any) => {
        if (err) throw err;
         res.cookie('token', token).json({
            id:userDoc._id,
            username,
         }); 
        });      
        
    }else {
        res.status(400).json('wrong password')
    }
})

app.get('/profile', (req, res) => {
   const token = req.cookies.secret
   if (token) {
    jwt.verify(token, secret, (err:any, token:any) =>{
    if (err) throw err;
        res.json(token)
    })
}})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

app.post('/api/create', uploadfileMiddlewaer.single(),   (req, res) => {
    console.log('files')
    res.json(req.body)
})

app.listen(4000, () => {
    console.log('Running on 4000')
});