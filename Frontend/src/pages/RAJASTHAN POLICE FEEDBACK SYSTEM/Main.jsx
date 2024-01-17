import React, { useState } from "react";
import Ashoka from "../../../src/Images/download.png";
import "./main.css";
import OtpVerification from "../otpverficaton/Otpverficat";
import ReCAPTCHA from "react-google-recaptcha";
import Box from "@mui/material/Box";
import axios from "axios";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Main = () => {
  const [feedbackrelated, setFeedbackrelated] = useState("");
  const [language, setLanguage] = useState("english");
  const handlelanguage = (event) => {
    setEnglish(event.target.value);
  };
  const handleChange = (event) => {
    setFeedbackrelated(event.target.value);
  };

  const [caphure, setCaphure] = useState(null);
  const [data, setData] = useState(null);

  const [formdata, setFormdata] = useState({
    name: "",
    mobileNo: "",
    location: "",
    PINCODE: "",
    address: "",
    email: "",
    feedbackrelatedto: feedbackrelated,
    feedback: "",
  });

  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  console.log(formdata);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error.message);
    }
  };

  return (
    <body>
      <header>
        <div className="hedar">
          <div class="header-content">
            <img  style={{width:"40px",paddingLeft:"6px"}} src={Ashoka} alt="ashok" />
          </div>
          <div>
            <h2 id="heading" style={{ color: "#000080" }}>
              {language === "hindi"
                ? "राजस्थान पुलिस सुझाव प्रणाली"
                : "Rajasthan Police Feedback System"}
            </h2>
          </div>
          <div class="image-circles">
            <div class="circle" style={{height:"10px"}}>
              <a href="https://www.police.rajasthan.gov.in/old/director.aspx" style={{height:"5px",padding:"0px",paddingRight:"6px"}}>
                {" "}
                <img
                 
                  style={{ padding: "0px",height:"60px",width:"60px" }}
                  src="https://upload.wikimedia.org/wikipedia/en/c/c4/Rajasthan_Police_Logo.png"
                  width="90px"
                  
                  alt="Rajasthan Police Logo"
                  class="logo"
                ></img>
              </a>
           
            </div>
          </div>
        </div>
      </header>
      <div className="nave-bar">
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={20}
        >
          <div class="header-content">
            <HomeSharpIcon sx={{ color: "#F0E68C", fontSize: "2rem" }} />
          </div>
          <div>
            <FormControl
              size="small"
              sx={{
                backgroundColor: "#F0E68C",
                color: "white",
                width: "8rem",
                marginTop: "0.2rem",
                marginBottom: "0.2rem",
              
              }}
            >
              <InputLabel id="demo-simple-select-autowidth-label">
               Select state
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleChange}
                autoWidth
                label="Select Police Station"
              >
                <MenuItem value={" Ajmer Police Station"}>
                  
                  Ajmer Police Station
                </MenuItem>
                <MenuItem value={" Alwar Police Station"}>
                
                  Alwar Police Station
                </MenuItem>
                <MenuItem value={"Anoopgarh Police Station"}>
                  
                  Anoopgarh Police Station
                </MenuItem>
                <MenuItem value={"Balotra Police Station"}>
                  
                  Balotra Police Station
                </MenuItem>
                <MenuItem value={"Banswara Police Station"}>
                  
                  Banswara Police Station
                </MenuItem>
                <MenuItem value={"Baran Police Station"}>
                  
                  Baran Police Station
                </MenuItem>
                <MenuItem value={"Barmer Police Station"}>
                  
                  Barmer Police Station
                </MenuItem>
                <MenuItem value={"Barmer Police Station"}>
                  
                  Beawar Police Station
                </MenuItem>
                <MenuItem value={"Bharatpur Police Station"}>
                  
                  Bharatpur Police Station
                </MenuItem>
                <MenuItem value={"Bhilwara Police Station"}>
                  
                  Bhilwara Police Station
                </MenuItem>
                <MenuItem value={"Bikaner Police Station"}>
                  
                  Bikaner Police Station
                </MenuItem>
                <MenuItem value={"Bundi Police Station"}>
                  
                  Bundi Police Station
                </MenuItem>
                <MenuItem value={"Chittorgarh Police Station"}>
                  
                  Chittorgarh Police Station
                </MenuItem>
                <MenuItem value={"Churu Police Station"}>
                  
                  Churu Police Station
                </MenuItem>
                <MenuItem value={"Dausa Police Station"}>
                  
                  Dausa Police Station
                </MenuItem>
                <MenuItem value={"Deeg Police Station"}>
                  
                  Deeg Police Station
                </MenuItem>
                <MenuItem value={"Dholpur Police Station"}>
                  
                  Dholpur Police Station
                </MenuItem>
                <MenuItem value={"Didwana Police Station"}>
                  
                  Didwana KuchamanPolice Station
                </MenuItem>
                <MenuItem value={"Dudu Police Station"}>
                  
                  Dudu Police Station
                </MenuItem>
                <MenuItem value={"Dungarpur Police Station"}>
                  
                  Dungarpur Police Station
                </MenuItem>
                <MenuItem value={"Ganganagar Police Station"}>
                  
                  Ganganagar Police Station
                </MenuItem>
                <MenuItem value={"Gangapurcity Police Station"}>
                  
                  Gangapurcity Police Station
                </MenuItem>
                <MenuItem value={"Hanumangarh Police Station"}>
                  
                  Hanumangarh Police Station
                </MenuItem>
                <MenuItem value={"Jaipur Police Station"}>
                  
                  Jaipur Police Station
                </MenuItem>
                <MenuItem value={"Jaipur Gramin Police Station"}>
                  
                  Jaipur Gramin Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jaisalmer Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jalore Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jhalawar Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jhunjhunu Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jodhpur Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Kotputli-Behror Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Nagaur Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Neem Ka Thana Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Pali Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Phalodi Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Jodhpur GraminPolice Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Karauli Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Kekri Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Khairthal-Tijara Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Kota Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Shahpura Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Sikar Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  Sirohi Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Tonk Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Udaipur Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Pratapgarh Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Rajsamand Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Salumbar Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Sanchor Police Station
                </MenuItem>
                <MenuItem value={"Police Station"}>
                  
                  Sawai Madhopur Police Station
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Button sx={{ backgroundColor: "#F0E68C", color: "black" }}>
              {" "}
              Police Station
            </Button>
          </div>
          <Button
            sx={{ backgroundColor: "#F0E68C" }}
            onClick={() =>
              setLanguage(language === "hindi" ? "english" : "hindi")
            }
          >
            {language == "hindi" ? "English" : "हिन्दी"}{" "}
          </Button>
        </Stack>
      </div>
      <div style={{backgroundColor:"hsl(56, 40%, 84%)"}}>
     
      <center>
      <Typography variant="h5"  color="black">
         
         {language === "hindi" ? "प्रतिक्रिया" : "Citizen Feedback"}
       </Typography>
          </center>
      
        <marquee>
          <Typography variant="h6" style={{ color: "#000080" }}>
            {language === "hindi"
              ? "आपकी ईमानदारी से हम आपको बेहतर तरीके से सेवा प्रदान कर सकते हैं..."
              : " Your honest feedback will help us service you in a better way..."}
          </Typography>
        </marquee>
        </div>

       
        <div className="container">
      
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="space-between"
          spacing={2}
          marginTop={3}
        >
          <Card sx={{ width: "50rem", backgroundColor: "lightyellow",boxShadow:"4px 4px 4px 4px gray" }}>
          
              <CardContent>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{ marginLeft: "1rem" }}
                >
                  <br></br>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi" ? "नाम:" : "Full Name:"}
                    </Typography>

                    <TextField
                      type="name"
                      id="formname"
                      label="First name"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      onChange={(e) => {
                        setFormdata({ ...formdata, name: e.target.value });
                      }}
                    />
                    <TextField
                      type="name"
                      id="formname"
                      label="last name"
                      variant="outlined"
                      size="small"
                      sx={{ backgroundColor: "white" }}
                      onChange={(e) => {
                        setFormdata({ ...formdata, name: e.target.value });
                      }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                        width: "82px",
                      }}
                    >
                      {language === "hindi" ? "मोबाइल नंबर:" : "Mobile No:"}
                    </Typography>

                    <TextField
                      required
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      id="mobileNo"
                      label="Number"
                      variant="outlined"
                      size="small"
                      onChange={(e) => {
                        setFormdata({ ...formdata, mobileNo: e.target.value });
                      }}
                      sx={{ backgroundColor: "white" }}
                    />

                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                        width: "82px",
                      }}
                    >
                      {language === "hindi" ? "OTP दर्ज करें:" : "Enter otp:"}
                    </Typography>

                    <TextField
                      required
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      id="mobileNo"
                      label="Number"
                      size="small"
                      variant="outlined"
                      onChange={(e) => {
                        setFormdata({ ...formdata, mobileNo: e.target.value });
                      }}
                      sx={{ backgroundColor: "white", width: "6rem" }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi" ? "पता:" : "Address:"}{" "}
                    </Typography>
                    <TextField
                      required
                      size="small"
                      id="addres"
                      label="address"
                      onChange={(e) => {
                        setFormdata({ ...formdata, address: e.target.value });
                      }}
                      variant="outlined"
                      sx={{ backgroundColor: "white", width: "20rem" }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi"
                        ? "शहर/गाँव:"
                        : "City/Village:"}{" "}
                    </Typography>
                    <TextField
                      required
                      id="Location"
                      size="small"
                      label="Location"
                      variant="outlined"
                      onChange={(e) => {
                        setFormdata({ ...formdata, location: e.target.value });
                      }}
                      sx={{ backgroundColor: "white" }}
                    />
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {language === "hindi" ? "पिन कोड:" : "Pin Code:"}{" "}
                    </Typography>
                    <TextField
                      required
                      size="small"
                      id="Area Pincode"
                      label="Pincode"
                      variant="outlined"
                      onChange={(e) => {
                        setFormdata({ ...formdata, PINCODE: e.target.value });
                      }}
                      sx={{ backgroundColor: "white", width: "6rem" }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                        width: "5.5rem",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      {language === "hindi" ? "सुझाव का प्रकार:" : "Email:"}
                    </Typography>
                    <OtpVerification
                      onChange={(e) => {
                        setFormdata({ ...formdata, email: e.target.value });
                      }}
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={4}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi"
                        ? "सुझाव का प्रकार:"
                        : "Feedback Type:"}
                    </Typography>
                    <FormControl
                      sx={{
                        minWidth: "15rem",
                        backgroundColor: "white",
                        marginTop: "0.2rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        {language === "hindi"
                          ? ""
                          : "Select Your feedback type"}
                      </InputLabel>
                      <Select
                        id="feedbackrelatedto"
                        onChange={(e) => {
                          handleChange(e);
                          setFormdata({
                            ...formdata,
                            feedbackrelatedto: e.target.value,
                          });
                        }}
                        autoWidth
                        label="feedback related to"
                      >
                        <MenuItem value={"General Enquiry"}>
                          General Enquiry
                        </MenuItem>
                        <MenuItem value={"Complaint"}>Complaint</MenuItem>
                        <MenuItem value={"Suggestion"}>Suggestion</MenuItem>
                        <MenuItem value={"Illegal Activity"}>
                          Illegal Activity
                        </MenuItem>
                        <MenuItem value={"Body Offence"}>Body Offence</MenuItem>
                        <MenuItem value={"Crime Against Women"}>
                          Crime Against Women
                        </MenuItem>
                        <MenuItem value={"Cyber Crime"}>Cyber Crime</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  {feedbackrelated === "General Enquiry" && <OtpVerification />}

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi"
                        ? "सुझाव विवरण:"
                        : "Feedback Description:"}{" "}
                    </Typography>

                    <textarea
                      id="feedbackDescription"
                      name="feedbackDescription"
                      rows="4"
                      style={{ width: "400px", height: "100px" }}
                      required
                      onChange={(e) => {
                        setFormdata({ ...formdata, feedback: e.target.value });
                      }}
                    ></textarea>
                  </Stack>
                  <br></br>

                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={5}
                  >
                    <Typography
                      style={{
                        backgroundColor: "#F0E68C",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#000080",
                      }}
                    >
                      {" "}
                      {language === "hindi"
                        ? "सुझाव विवरण:"
                        : " Enter this:"}{" "}
                    </Typography>
                    <div>
                      <ReCAPTCHA
                        sitekey="6Lf9HlEpAAAAAHeYJSJyyPojKZNWappNPJH5h1k6"
                        onChange={(val) => setCaphure(val)}
                      />
                    </div>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "brown",
                        padding: "10px 20px 10px 20px",
                      }}
                      onClick={()=>{window.location.reload()}}
                    >
                      Reset
                    </Button>
                  </Stack>
                  <div>
                    <Button
                      sx={{
                        color: "black",
                        backgroundColor: "#F0E68C",

                        padding: "10px 20px 10px 20px",
                        borderRadius: "20px",
                      }}
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Stack>
                <br></br>
                <br></br>
                <br></br>
              </CardContent>
            
          </Card>
          <br></br>
          <br></br>
          <body></body>
        </Stack>
      </div>
    </body>
  );
};

export default Main;
