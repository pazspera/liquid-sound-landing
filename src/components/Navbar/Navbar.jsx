import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
          PaperProps={{ sx: { backgroundColor: theme.palette.common.white } }}
        >
          <Box onClick={closeDrawer} onKeyDown={closeDrawer}>
            <List>
              <ListItem>
                <Typography component="a" href="#nuestros-productos" style={({ isActive }) => ({ color: isActive ? theme.palette.primary.main : theme.palette.text.hoverLinks })}>
                  <ListItemText primary="Productos"></ListItemText>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="a" href="https://liquidsound-ar.blogspot.com/" target="_blank" rel="noopener noreferrer" style={({ isActive }) => ({ color: isActive ? theme.palette.primary.main : theme.palette.text.hoverLinks })}>
                  <ListItemText primary="Blog"></ListItemText>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography component="a" href="#contacto" style={({ isActive }) => ({ color: isActive ? theme.palette.primary.main : theme.palette.text.hoverLinks })}>
                  <ListItemText primary="Contacto"></ListItemText>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? theme.palette.primary.main : theme.palette.text.hoverLinks })}>
            <Typography variant="subtitle1" component="span">
              <p>Logo</p>
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
      <AppBar>
        <Container maxWidth="lg" sx={{ backgroundColor: theme.palette.common.white}}>
          {isMobile ? <MobileNav /> : <DesktopNav />}
        </Container>
      </AppBar>
    </>
  )
}
