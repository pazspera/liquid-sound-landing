import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, Box, CardMedia } from "@mui/material";

export default function QuienesSomos() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl" sx={{ py: theme.layout.sectionPadding}}>
        <Grid container spacing={2} alignItem="stretch">
          <Grid size={{ xs: 12, md: 7, lg: 7 }} sx={{ display: "flex", border: "1px solid red", flexDirection: "column" }}>
            <Box sx={{ pr: { lg: 8 }, flex: 1 }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ padding: theme.layout.titlePadding, color: theme.palette.text.secondary, textAlign: "center" }}>
                ¿Quiénes somos?
              </Typography>
              <Typography component="p" variant="body3" gutterBottom>
                Liquid Sound es una empresa con más de 20 años de experiencia en la fabricación y distribución de insumos para laboratorios y entornos que requieren altos estándares de higiene y asepsia.
              </Typography>
              <Typography component="p" variant="body3" gutterBottom>
                Brindamos soluciones para diversas industrias, incluyendo el sector médico, alimentario, farmacéutico, estético, veterinario y de body art.
              </Typography>
              <Typography component="p" variant="body3" gutterBottom>
                Nuestra línea de productos abarca indumentaria descartable, bobinas de papel, desinfectantes de superficies, detergentes enzimáticos y productos para la higiene de manos, todos diseñados para garantizar la seguridad y limpieza en espacios profesionales.
              </Typography>
              <Typography component="p" variant="body3" gutterBottom>
                <strong>
                  Protegemos procesos, cuidamos usuarios y garantizamos entornos seguros.
                </strong>
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5, lg: 5 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", border: "1px solid red" }}>
              <CardMedia 
                component="img"
                srcSet={
                  "/img/quienes-somos-small.png 480w, /img/quienes-somos-medium.png 768w, /img/quienes-somos-large.png 1280w"
                }
                sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
                sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain"}}
              />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}