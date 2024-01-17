import React, { useState } from 'react';
import axios from 'axios';
import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";

const OtpVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(false);

  const handleSendOTP = async () => {
    try {
      // Make a request to your backend API to generate and send OTP
      const response = await axios.post('http://localhost:3000/otpToEmail', {
        email: email,
      });

      // Assuming your backend returns success
      if (response.data.message === 'OTP sent successfully') {
        setOtp(true);
        alert('OTP sent successfully!');
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };
  
  const handleVerifyOTP = async () => {
    const enteredOTP = prompt('Enter the OTP sent to your email:');
    try {
      // Make a request to your backend API to verify the entered OTP
      const response = await axios.post('http://localhost:3000/verify-otp', {
        otp: enteredOTP,  // Use enteredOTP, not otp
      });
  
      console.log(response);
  
      // Assuming your backend returns success
      if (response.data.message === "OTP verified successfully") {
        alert('OTP verification successful!');
      } else {
        alert('OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  
  return (
    <div>
        <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={5}
                  >
                      

                      
        <TextField
         required
         id="Email"
         label="Email"
         size="small"
         variant="outlined"
         type="emali"
         sx={{ backgroundColor: "white" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
   
      <br />
   
                   
                    

      <Button onClick={handleSendOTP} disabled={otp}>
        {otp ? 'OTP Sent' : 'Send OTP'}
      </Button>

      {otp && (
        <div>
          <Button onClick={handleVerifyOTP}>Verify OTP</Button>
        </div>
      )}
  
                  </Stack>
   </div>
  );
};

export default OtpVerification;
