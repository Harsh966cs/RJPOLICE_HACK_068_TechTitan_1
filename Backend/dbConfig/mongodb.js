 const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});


async function connect()
{
  try {

   await mongoose.connect(process.env.DB_URL);
 
    console.log("mongoose connected successfully");
  

  } catch (error) {
    console.log("Somthing goes wrong")
    console.log(error);

  }
}


module.exports = connect;