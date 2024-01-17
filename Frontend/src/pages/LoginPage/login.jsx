import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ReCAPTCHA from "react-google-recaptcha";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  ); 
  const onChange=()=>{}
const login = () => {
  return (
    <div style={{overflow:"hidden"}} >
        <div style={{overflow:"hidden"}}>
        <Card   style={{
        height:"33rem",
        overflow:"hidden",
        width:"40rem",
        margin:"auto",
       display:"flex",
       textAlign:"start",
       padding:"0px",
        marginTop:"1rem",
        backgroundColor:"#FFE8A3"
        
    }}
        >
      <CardContent style={{padding:"0px",margin:"0px"}}>
      <Typography variant='h4' gutterBottom style={{paddingTop:"3rem ", textAlign:"center"}}>
        LOGIN/SIGNUP
      </Typography>
        <div style={{borderBottom:"2px solid black",
                    width:"40rem"
                    }}>
        </div>
        <div style={{marginTop:"1rem" , marginLeft:"2rem"}}>
        <Typography gutterBottom variant='h5'  >
            E-mail:
        </Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <Typography gutterBottom variant='h5'  >
            Password:
        </Typography>
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
        <br></br>
        <Button variant="text" style={{color:'black' ,marginLeft:"1rem",marginTop:"2rem",textTransform:"capitalize"}}>*sign-in first if you don’t</Button>
        <br>
        
        </br>
        <Button variant="contained" style={{marginTop:"2rem" ,marginLeft:"15rem"}}>Login</Button>
        </div>
      <div>
      <ReCAPTCHA
    sitekey="6LfFhjopAAAAABLIge_IAG9CKkaexPNJX2zbuhjk"
    onChange={onChange}
  />
      </div>
       
      </CardContent>
   
  
    </Card>
  
   


        </div>
    </div>
  )
}

export default login;