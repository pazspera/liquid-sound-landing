import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Toolbar, Typography, useMediaQuery, CardMedia } from "@mui/material";
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
        <p>DesktopNav</p>
      </>
    )
  }

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.common.white }}>
        <AppBar sx={{ backgroundColor: theme.palette.common.white }}>
          <Container maxWidth="lg" sx={{ backgroundColor: theme.palette.common.white}}>
            {isMobile ? <MobileNav /> : <DesktopNav />}
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
