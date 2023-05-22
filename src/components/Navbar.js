import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Navbar = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      <Typography key="3" color="text.primary">
        <GridViewSharpIcon color="action" 
        sx={{ paddingRight: "10px", fontFamily: "Open Sans", fontSize: "20px", color: "#0B3558", fontWeight: "regular" }} />
        Zeperon SignInAssignment
      </Typography>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
    >
      <Typography key="3" color="text.primary" 
      sx={{fontFamily: "Open Sans", fontSize: "20px", color: "#0B3558", fontWeight: "bold" }}>
        Sign In
      </Typography>
    </Link>,
  ];


  return (
    <Box sx={{ flexGrow: 1, height: "10vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
