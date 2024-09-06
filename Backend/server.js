import express from 'express';
import mongoose from 'mongoose';


const app  = express()
app.use(express.json());

const DatabaseConnection = async()=>{
    try{
        await mongoose.connect('mongodb+srv://<db_username>:<db_password>@cluster0.pjhop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
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
app.listen(port,()=>{
    DatabaseConnection();
    console.log('app running from port',app)
    console.log("Connected to backend.");
});
