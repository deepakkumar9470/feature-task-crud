import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000
import cookieParser from 'cookie-parser'
import cors from 'cors'


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : false}))
app.use(cors());


app.get('/', (req,res)=>{
    res.send('hello mern auth..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
});


