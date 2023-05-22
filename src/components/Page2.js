import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const Page2 = () => {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {

        setInterval(function () {
          validatesession()
        }, 5000);
    
    }
    else {
      history.push("/");
    }

  }, []);

  const validatesession = () => {
    axios({
      method: "POST",
      url: `http://localhost:5000/users/validatetoken`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
       // do nothing
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(err.response.data.message, { position: "top-right" });
        localStorage.removeItem("token");
        history.push("/");
        window.location.reload();
      });
  }

  console.log("Page 2", localStorage.getItem("token"))
  return (
    <>
      <Navbar />

      <Box sx={{ flexGrow: 1, backgroundColor: "#00000029" }}>
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
            <Item sx={{height: "70vh"}}>
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{fontFamily: "Open Sans", fontSize: "48px", color: "#0B3558", fontWeight: "bold"}}
              >
                Welcome, {localStorage.getItem(("username"))}
              </Typography>
            </Item>
          </Grid>
        </Grid>
       
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Page2;
