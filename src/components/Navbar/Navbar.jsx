import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Toolbar, Typography, useMediaQuery, CardMedia, Paper } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const MobileNav = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const openDrawer = () => setOpenMobileMenu(true);
    const closeDrawer = () => setOpenMobileMenu(false);

    return (
      <>
        <SwipeableDrawer
          anchor="right"
          open={openMobileMenu}
          onClose={closeDrawer}
          onOpen={openDrawer}
          PaperProps={{ sx: { backgroundColor: theme.palette.common.white, minWidth: "200px" } }}
        >
          <Box onClick={closeDrawer} onKeyDown={closeDrawer}>
            <List>
              <ListItem>
                <Typography component="a" variant="h6" href="#nuestros-productos" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                  Productos
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="a" variant="h6" href="https://liquidsound-ar.blogspot.com/" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                  Blog
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="a"  variant="h6" href="#contacto" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
                  Contacto
                </Typography>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
        <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
          <NavLink to="/">
            <Typography component="span">
              <CardMedia component="img" src="/img/logo-liquid-sound.png" alt="Logo Liquid Sound" sx={{ maxWidth: "100px" }} />
            </Typography>
          </NavLink>
          <IconButton onClick={openDrawer} >
            <MenuIcon />
          </IconButton>
        </Box>
      </>
    );
  }

  const DesktopNav = () => {
    return (
      <>
        <Toolbar elevation={0} sx={{ display: "flex", justifyContent: "space-between" }} disableGutters>
          <NavLink to="/">
            <Typography component="span">
              <CardMedia component="img" src="/img/logo-liquid-sound.png" alt="Logo Liquid Sound" sx={{ maxWidth: { xs: "100px", lg: "120px" } }} />
            </Typography>
          </NavLink>
          <Box sx={{ display: "flex", gap: { md: 2, lg: 3 } }}>
            <Typography component="a" variant="h6" href="#nuestros-productos" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
              Productos
            </Typography>
            <Typography component="a" variant="h6" href="https://liquidsound-ar.blogspot.com/" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
              Blog
            </Typography>
            <Typography component="a"  variant="h6" href="#contacto" sx={{ color: theme.palette.primary.main, textDecoration: "none" }}>
              Contacto
            </Typography>
          </Box>
        </Toolbar>
      </>
    )
  }

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.common.white }}>
        <Paper elevation={1} component="header" sx={{ backgroundColor: theme.palette.common.white }}>
          <Container maxWidth="xl" sx={{ backgroundColor: theme.palette.common.white}}>
            {isMobile ? <MobileNav /> : <DesktopNav />}
          </Container>
        </Paper>
      </Box>
    </>
  )
}
