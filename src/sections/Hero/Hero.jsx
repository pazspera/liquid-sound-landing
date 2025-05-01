import { Container, Grid, Typography, Box, Button, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl" sx={{ py: theme.layout.sectionPadding }}>
        <Grid container direction="row" spacing={2} sx={{ display: "flex", alignItems: "center"}}>
          <Grid item size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                padding: theme.layout.titlePadding,
                color: theme.palette.text.secondary
              }}>
              Soluciones integrales en higiene
            para entornos profesionales
            </Typography>
            <Typography component="p" variant="body3" gutterBottom>
              Productos certificados que facilitan ambientes limpios y protegidos, garantizando el cumplimiento normativo y la seguridad en espacios que requieren altos estándares de limpieza.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row"}, gap: 2, padding: "16px 0", alignItems: "left" }}>
              <Button variant="contained" component="a" href="https://www.liquidsound.com.ar/" target="_blank" rel="noopener noreferrer">Ir a la tienda</Button>
              <Button variant="text" href="#contacto">Pedir cotización</Button>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }} sx={{ pl: { lg: 3 }}}>
            <CardMedia 
              component="img"
              image="/img/hero-img.png"
              alt="Profesional con bata y guantes desinfectando una superficie quirúrgica"
              srcSet={
                "/img/hero-img-small.png 480w, /img/hero-img-medium.png 768w, /img/hero-img-large.png 1280w"
              }
              sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
            /> 
          </Grid>
        </Grid>
      </Container>
    </>
  )
} 