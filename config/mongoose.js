// 4JlZW8Xc03X6UNR6
require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
console.log("thamitha",process.env.DB_URL);
let DB_URL = "mongodb:// 0.0.0.0:27017/myapp";
// let DB_URL="mongodb+srv://vermakhushbu723:4JlZW8Xc03X6UNR6@cluster0.g2sv4fr.mongodb.net/test"
//connect to the database
mongoose.connect(DB_URL)
  
   
  .then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })                                    
  
 

