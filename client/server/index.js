import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import bodyParser from 'body-parser'
const app=express();
import axios from 'axios'
import Weather from './Model/WeatherInfo.js'
import cities from './city.js'
import path from 'path';
app.use(cors());


dotenv.config();

//middleware
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

//static files
app.use(express.static(path.join(__dirname,'../client/build')))

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"../client/build/index.html"));
})

//connection with mongoose
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


app.get('/weather',async(req,res)=>{
   try {
    let data = await Weather.find();
    res.status(200).json(data);
   } catch (error) {
    res.status(500).json("error fetching")
   }
    
})

async function getWeather(city){
    const apiKey = '59c6e52faba2ddb625854d2d3e8924b3';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
        const response = await axios.get(url);
        //console.log(response);
        const data = response.data;
        //create a new weather data from city data
        const newweather = new Weather({
            city: data.name,
            temperature: (Math.floor(data.main.temp)-273),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            clouds:data.clouds.all,
            coord:data.coord
        })
        
        const checkInDB= await Weather.findOne({newweather});
        //console.log(checkInDB);
        
        if(checkInDB){
          return; 
        }
        await newweather.save();
        //console.log(res);
 
    } catch (error) { 
        console.log(error);
    }
}


const thirtyCities = cities.slice(0, 30);
const cityPromises = thirtyCities.map(city => getWeather(city));
Promise.all(cityPromises)
  .then(() => console.log("All data saved to the database"))
  .catch(error => console.log(error));


