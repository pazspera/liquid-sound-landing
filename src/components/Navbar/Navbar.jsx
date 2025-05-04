import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Toolbar, Typography, useMediaQuery } from "@mui/material";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme)=> theme.breakpoints.down("md"));

  const MobileNav = () => {
    return (
      <>
        <p>MobileNav</p>
      </>
    )
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
        <Container maxWidth="lg">
          { isMobile ? <MobileNav/> : <DesktopNav/> }
        </Container>
      </AppBar>
    </>
  )
}
