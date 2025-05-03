import { useTheme }  from "@mui/material/styles";
import { Container, Box, Typography, Grid, CardMedia } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.footer, py: theme.layout.sectionPadding }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid size={{ xs: 12 }}>
              <CardMedia 
                component="img"
                src="/img/logo-liquid-sound.png"
                alt="Logo Liquid Sound"
                sx={{ maxWidth: "220px"}}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
               {/* Info */}
              <Box>
                {/* Teléfonos */}
                <Box>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <LocalPhoneIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                    <Typography 
                      component="p"
                      variant="body1"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      011 5654-8438/011 4553-2891
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <EmailIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                    <Typography 
                      component="a"
                      variant="body1"
                      href="mailto:ventas@liquidsound.com.ar"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      ventas@liquidsound.com.ar
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <StoreIcon sx={{ fontSize: 28, mr: 0.5, color: theme.palette.primary.main }} />
                    <Typography 
                      component="a"
                      variant="body1"
                      href="https://www.liquidsound.com.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      ¡Visite nuestra tienda!
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Iconos redes */}
              <Box>
                <Box
                  component="a"
                  href="https://www.instagram.com/liquidsoundar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
                </Box>
                <Box
                  component="a" 
                  href="https://www.facebook.com/LiquidSoundAR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
                </Box>
                <Box
                  component="a"
                  href="https://www.twitter.com/LiquidSoundAR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Políticas de privacidad
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ color: theme.palette.primary.main }}
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