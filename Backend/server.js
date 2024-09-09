import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const app  = express();
app.use(express.json());


const DatabaseConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Sucessful connection from mongoodb");
    }catch{
        console.log("Connection error!!");
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log('mongoDB Disconnected')
});
const port = 8080;
app.get('/',(req,res)=>{
    res.send("hello");
});
app.get('/api',(req,res)=>{
    res.json({message: "contact us 24/7 "});
});

app.post('/apii/:id',(req,res)=>{
    const query = req.query.name
    
    const param = req.params.id
    const Data = `Requests From Frontend: query,${query}, param is: ${param}`
    
    res.status(200).json({message:'sucessfuly ',data:Data})
    console.log("post successful");
});

const ports = process.env.PORT || 8000
app.listen(ports,()=>{
    DatabaseConnection();
    console.log('app running from port',port)
    console.log("Connected to backend.");
});
