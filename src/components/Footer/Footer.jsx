import { useTheme } from "@mui/material/styles";
import { Container, Box, Typography, Grid, CardMedia } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.footer, py: theme.layout.footerPadding }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid size={{ xs: 12 }} sx={{ mb: 2, display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
              <CardMedia
                component="img"
                src="/img/logo-liquid-sound.png"
                alt="Logo Liquid Sound"
                sx={{ maxWidth: "220px" }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              {/* Info */}
              <Box sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-between" } }}>
                <Box sx={{ mb: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { sm: 4 }, justifyContent: { md: "center", lg: "flex-start" } }}>
                  {/* Teléfonos */}
                  <Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1, color: theme.palette.primary.main, transition: "color 0.3s ease", "&:hover": { color: theme.palette.text.hoverLinks, "& .MuiTypography-root": { color: theme.palette.text.hoverLinks }, "& svg": { color: theme.palette.text.hoverLinks }} }}>
                      <LocalPhoneIcon sx={{ fontSize: 28, mr: 0.5 }} />
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: theme.palette.primary.main }}
                      >
                        011 5654-8438/011 4553-2891
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1, textDecoration: "none", transition: "color 0.3s ease", "&:hover": { color: theme.palette.text.hoverLinks, "& .MuiTypography-root": { color: theme.palette.text.hoverLinks }, "& svg": { color: theme.palette.text.hoverLinks }} }} component="a" href="https://wa.me/5491156548438" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                      <Typography
                        component="p"
                        variant="body1"
                        sx={{ color: theme.palette.primary.main }}
                      >
                        +54 9 11 5654 8438
                      </Typography>
                    </Box>
                  </Box>
                  {/* Links */}
                  <Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1, transition: "color 0.3s ease", "&:hover": { color: theme.palette.text.hoverLinks, "& .MuiTypography-root": { color: theme.palette.text.hoverLinks }, "& svg": { color: theme.palette.text.hoverLinks }} }} component="a"
                      variant="body1"
                      href="mailto:ventas@liquidsound.com.ar">
                      <EmailIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                      <Typography

                        sx={{ color: theme.palette.primary.main }}
                      >
                        ventas@liquidsound.com.ar
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1, transition: "color 0.3s ease", "&:hover": { color: theme.palette.text.hoverLinks, "& .MuiTypography-root": { color: theme.palette.text.hoverLinks }, "& svg": { color: theme.palette.text.hoverLinks }} }} 
                      component="a"
                      variant="body1"
                      href="https://www.liquidsound.com.ar/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <StoreIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                      <Typography

                        sx={{ color: theme.palette.primary.main }}
                      >
                        ¡Visite nuestra tienda!
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* Iconos redes solo desktop */}
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <FooterSocialLinks />
                </Box>
              </Box>
              {/* Iconos redes mobile/tablet */}
              <Box sx={{ display: { lg: "none" } }}>
                <FooterSocialLinks />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { sm: 3 }, justifyContent: { xs: "center", lg: "flex-start" }, alignItems: { xs: "center" } }}>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ color: theme.palette.primary.main, mb: 1 }}
                >
                  Políticas de privacidad
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ color: theme.palette.primary.main, mb: 1 }}
                >
                  Términos de uso
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}