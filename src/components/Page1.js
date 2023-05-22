import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./Navbar";
import Footer from "./Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Badge from '@mui/material/Badge';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Page1 = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [onecolor, setOnecolor] = useState("yellow")
  const [twocolor, setTwocolor] = useState("yellow")

  useEffect(() => {
    // test case 1
    if (localStorage.getItem("token")) {
      history.push("/Page2");
      window.location.reload();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
if(!username) {
  toast.error("Email is required", { position: "top-right" });
}
else if(!password) {
  toast.error("Password is required", { position: "top-right" });
}
else {
  let body = {
    email: username,
    password: password,
  };

  axios
    .post("http://localhost:5000/users/login", body)
    .then((res) => {

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.data.fullname);
      history.push("/Page2");
      window.location.reload();
    })
    .catch((err) => {

      toast.error(err.response.data.message, { position: "top-right" });
    });
}
   
  };

  const passwordDisplay = () => {
    setShow(!show);
  };

  const handleMousemove1 = () => {

      setOnecolor("blue")
  }
  const handleMouseleave1 = () => {
      setOnecolor("yellow")
  }

  const handleMousemove2 = () => {

    setTwocolor("blue")
  }
  const handleMouseleave2 = () => {
    setTwocolor("yellow")
  }

  return (
    <>
      <Navbar />

      <Box sx={{ height: "82vh", flexGrow: 1, backgroundColor: "#00000029" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Avatar
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  margin: "auto",
                  backgroundColor: "#EFEFEF"
                }}
              >
                <PersonOutlineSharpIcon
                  sx={{
                    color: "blue",
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Avatar>
            </Item>
            <Item>
              <Typography 
              variant="h3" 
              gutterBottom
              sx={{fontFamily: "Open Sans", fontSize: "48px", color: "#0B3558", fontWeight: "bold"}}
              >
                Welcome!
              </Typography>
            </Item>
            <Item>
              <Typography 
              variant="body2" 
              sx={{fontFamily: "Open Sans", fontSize: "20px", color: "#0B3558", fontWeight: "regular"}}
              >
                Let's connect to your workspace.
                <br />
                Please enter your email to continue.
              </Typography>
            </Item>
            <form>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      id="outlined-email"
                      label="Email Address"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"
                          onMouseMove={handleMousemove1} 
                          onMouseLeave={handleMouseleave1}
                          sx={{paddingRight: "10px"}}>
                           <Badge badgeContent={1} 
                           sx={{
                            "& .MuiBadge-badge": {
                              color: "#000",
                              backgroundColor: onecolor,
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%"
                            }
                          }}
                           ></Badge>
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      id="outlined-password"
                      label="Password"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      type={show === false ? "password" : "text"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {show === true ? (
                              <VisibilityIcon
                                onClick={passwordDisplay}
                                sx={{ cursor: "pointer" }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                onClick={passwordDisplay}
                                sx={{ cursor: "pointer" }}
                              />
                            )}
                          </InputAdornment>
                        ),
                        "aria-label": "weight",
                      }}
                    />
                    <FormHelperText
                      id="helper-password"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                        alignItems: "right",
                        color: "#003FB9",
                        fontWeight: "bold",
                        fontFamily: "Open Sans",
                        fontSize: "16px"
                      }}
                    >
                      Forgot passworrd ?
                    </FormHelperText>
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ 
                      width: "45ch", 
                      fontFamily: "Open Sans", 
                      fontWeight: "bold", 
                      fontSize: "18px", 
                      color: "#fff",
                      backgroundColor: "#003FB9"
                     }}
                  >
                    Sign In
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge badgeContent={2} 
                         sx={{
                          "& .MuiBadge-badge": {
                            color: "#000",
                            backgroundColor: twocolor,
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%"
                          }
                        }}
                        onMouseMove={handleMousemove2}
                        onMouseLeave={handleMouseleave2}
                    ></Badge>
                   
                  </Button>
                 
                </Item>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>

      <Footer />

    </>
  );
};

export default Page1;
