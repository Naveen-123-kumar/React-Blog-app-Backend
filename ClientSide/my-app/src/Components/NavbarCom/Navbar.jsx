import {
    Grid,
    Typography,
    Box,
    ThemeProvider,
    Paper,
    IconButton,
    Menu,
    MenuItem,
  } from "@mui/material";
  import React from "react";
  import Theme from "../../Theme";
  import MenuIcon from "@mui/icons-material/Menu";
  import { Link } from "react-router-dom";
  
  const Navbarbutton = [
    { title: "Home", location: "/" },
    { title: "Bollywood", location: "/bollywood" },
    { title: "Technology", location: "/technology" },
    { title: "Hollywood", location: "/hollywood" },
    { title: "Fitness", location: "/fitness" },
    { title: "Food", location: "/food" },
  ];
  
  const pages = [
    { title: "Home", location: "/" },
    { title: "Bollywood", location: "/bollywood" },
    { title: "Technology", location: "/technology" },
    { title: "Hollywood", location: "/" },
  ];
  
  const Navbar = () => {
    const [Open, setOpen] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setOpen(null);
    };
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Paper sx={{ position: "fixed", top: "0", right: "0px", left: "0px" }}>
            <Grid container>
              <Grid item lg={12} xs={12}>
                <Box
                  sx={{
                    display: { xs: "flex" },
                    justifyContent: { xs: "space-between", md: "none" },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: { xs: "left", md: "center" },
                      padding: { xs: "10px", md: "5px" },
                      paddingLeft: { xs: "30px" },
                      flexGrow: {
                        md: "1",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "42px" },
                        fontWeight: "bold",
                      }}
                    >
                      The Siren
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                      paddingRight: { xs: "20px", md: "none" },
                    }}
                    
                  >
                    <IconButton
                      size="large"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={Open}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(Open)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Link to={page.location} style={{ textDecoration: "none" }}>
                            <Typography textAlign="center" style={{ textDecoration: 'none' }}>
                              {page.title}
                            </Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection={"row-start"}
                  justifyContent="space-evenly"
                  width={"80%"}
                  mx="auto"
                  paddingBottom={"15px"}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {Navbarbutton.map((item) => (
                    <Box>
                      <Link to={item.location} style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" style={{ textDecoration: 'none' }}>{item.title}</Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </>
    );
  };
  export default Navbar;
  