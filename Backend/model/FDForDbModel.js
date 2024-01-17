const mongoose = require('mongoose');
const connect = require('../dbConfig/mongodb');
require('dotenv').config({ path: '../.env' });
connect();




const feedbackSchema = new mongoose.Schema({
    District:{
    type:String,
    require:true
    },
    PoliceStation:{
    type:String,
    require:true
    },
    name:{
        type:String,
        required:true
    },
    mobileNo:{
type:Number,
required:true
    },
    location:{
        type:String,
        required:true
    },
    PINCODE:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    feedbackrelatedto:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
 
    
});


const feedbackModel = mongoose.model.feedback || mongoose.model('Feedback',feedbackSchema);

module.exports={
    feedbackSchema,
    feedbackModel
};

