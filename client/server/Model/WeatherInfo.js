import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: {
      type: Number,
      min: -273,
      max: Infinity,
      required: true
  },
    humidity: Number,
    windSpeed: Number,
    clouds: Number,
    coord : {"lat": Number, "lon": Number},
    date: { type: Date, default: Date.now }
    
    
  });

  const Weather = mongoose.model('weather', weatherSchema);
  export default Weather;