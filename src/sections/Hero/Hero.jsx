import { Container, Grid, Typography, Box, Button, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Grid container direction="row" spacing={2} sx={{ display: "flex", alignItems: "center"}}>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                padding: theme.layout.titlePadding,
                color: theme.palette.text.secondary
              }}>
              Soluciones integrales en higiene
            para entornos profesionales
            </Typography>
            <Typography component="p">
              Productos certificados que facilitan ambientes limpios y protegidos, garantizando el cumplimiento normativo y la seguridad en espacios que requieren altos estándares de limpieza.
            </Typography>
            <Box>
              <Button variant="contained">Ir a la tienda</Button>
              <Button variant="text">Pedir cotización</Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <CardMedia 
              component="img"
              image="/img/hero-img-large.png"
            /> 
          </Grid>
        </Grid>
      </Container>
    </>
  )
} 