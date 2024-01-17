import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
const Singupe = () => {
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
      SIGN-IN FOR FEEDBACK
      </Typography>
        <div style={{borderBottom:"2px solid black",
                    width:"40rem"
                    }}>
        </div>
        <div style={{marginTop:"1rem" , marginLeft:"2rem"}}>
        <Typography gutterBottom variant='h5'   >
        Name:
        <TextField
      required
      id="outlined-required"
      size='small'
      style={{height:"1rem",marginLeft:"1rem"}}
        />
        <br>
        </br>
     </Typography>
     <br></br>
     <Typography gutterBottom variant='h5' style={{padding:"0px"}}  >
        E-mail:
        <TextField
      required
      id="outlined-required"
      size='small'
      style={{marginLeft:"1rem"} }
        />
        <br></br>
     </Typography>
     <br>
     </br>
     <Typography gutterBottom variant='h5' style={{padding:"0px"}}  >
        Contact no:
        <TextField
      required
      id="outlined-required"
      size='small'
      style={{marginLeft:"1rem"}}
        />
     </Typography>
    
     <br></br>
       
        <Typography gutterBottom variant='h5'  >
            Password:
            <TextField id="outlined-basic" type='password' variant="outlined"  size='small'style={{marginLeft:"1.5rem"}} />
        </Typography>
        <br></br>
        <Typography gutterBottom variant='h5'   >
        Confirm
        <TextField id="outlined-basic" type='password' variant="outlined"  size='small' style={{marginLeft:"2rem"}}/>
        <br>
        </br>
            Password:
           
        </Typography>
      
        
        <Button variant="contained" style={{marginLeft:"13rem"}}>Sign-In</Button>
        </div>
       
      </CardContent>
   
    </Card>
        </div>
    </div>
  )
}

export default Singupe;