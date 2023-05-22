import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../assets/logo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
 
  return (
    <Box sx={{ height: "10vh", flexGrow: 1, marginTop: "70px", paddingBottom: "15px", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="left"
      >
        <Grid item xs={2} sm={4} md={6} sx={{color: "#728391"}}>
        Powered by{" "}
          <img
            src={logo}
            alt="logo"
            style={{ width: "80px", height: "23px", objectFit: "contain" }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sm={4}
          md={2}
          sx={{ color: "#003FB9" }}
        >
          Need help?
        </Grid>
        <Grid
          item
          xs={2}
          sm={4}
          md={2}
          sx={{ color: "#003FB9" }}
        >
          Privacy Policy{" "}
          <span style={{ color: "#728391", fontWeight: "normal" }}>&</span> Terms
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
