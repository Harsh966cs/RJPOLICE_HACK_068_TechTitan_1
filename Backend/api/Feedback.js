const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('../dbConfig/mongodb');
const { feedbackModel } = require('../model/FDForDbModel');
const app = express();
const sendMail = require('./helper/emailr');
app.use(bodyParser.json());

connect();
app.use(cors());
app.post('/feedback', async (req, res) => {
    try {
        const {
            District,
            PoliceStation,
            name,
            mobileNo,
            location,
            PINCODE,
            address,
            email,
            feedbackrelatedto,
            feedback
        } = req.body;
        
      

        const feedbackfordatabase = new feedbackModel({
            District,
            PoliceStation,
            name,
            mobileNo,
            location,
            PINCODE,
            address,
            email,
            feedbackrelatedto,
            feedback
        });



        
        await feedbackfordatabase.save();
        console.log("Feedback Submitted");
        res.status(200).send("Feedback Submitted");
    } catch (error) {
        console.log("Error submitting feedback", error);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
