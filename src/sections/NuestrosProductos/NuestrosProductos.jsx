import styles from "./NuestrosProductos.module.css";
import { Container, Grid, Typography, Box, CardMedia, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export default function NuestrosProductos() {
  const theme = useTheme();

  return (
    <>
      {/* Layout simple */}
      <Container 
        maxWidth="xl"
        sx={{
          pb: theme.layout.sectionPadding,
          pt: "24px"
        }}
        id="nuestros-productos"
      >
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <CardMedia
              component="img"
              srcSet={
                "/img/productos_liquid_sound_small.jpg 480w, /img/productos_liquid_sound_medium.jpg 768w, /img/productos_liquid_sound_large.jpg 1280w"
              }
              className={styles.image}
              sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
              alt="Familia de productos de Liquid Sound"
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ display: { lg: "flex" }, justifyContent: { lg: "space-around"} }}>
            <Box 
              component="section" 
              className={styles.text}
              sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "24px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom
                sx={{ textAlign: "center", color: theme.palette.common.white }}
              >
                Nuestros productos
              </Typography>
              <Typography component="ul" className={styles.list}>
                <Typography component="li" className={styles.listItem}><strong>Desinfección de instrumental médico:</strong> Garantiza la esterilidad en quirófanos y clínicas.</Typography>
                <Typography component="li" className={styles.listItem}><strong>Detergentes enzimáticos:</strong> Limpieza profunda para instrumental médico y quirúrgico.</Typography>
                <Typography component="li" className={styles.listItem}><strong>Espuma para tatuajes:</strong> Producto especializado para el cuidado y desinfección en body art.</Typography>
                <Typography component="li" className={styles.listItem}><strong>Jabones y alcohol en gel:</strong> Higiene de manos certificada para entornos críticos.</Typography>
                <Typography component="li" className={styles.listItem}><strong>Guantes de látex y barbijos:</strong> Protección desechable en entornos estériles.</Typography>
              </Typography>
              <Box 
                sx={{ 
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row"}, 
                  gap: 2, 
                  pt: { xs: 3, lg: 3  },
                  pl: { lg: 2 },
                  justifyContent: { sm: "center", md: "flex-start" }
                }}>
                <Button variant="contained" component="a" href="https://www.liquidsound.com.ar/" target="_blank" rel="noopener noreferrer">Ir a la tienda</Button>
                <Button variant="text" href="#contacto" sx={{ color: theme.palette.common.white}}>Pedir cotización</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
      </Container>

      {/* Layout superpuesto */}
      {/* <Container 
        maxWidth="xl"
        sx={{
          pb: theme.layout.sectionPadding,
          pt: "24px"
        }}
        id="nuestros-productos"
      >
        <Box className={styles.gridContainer}>
          <CardMedia
            component="img"
            srcSet={
              "/img/productos_liquid_sound_small.jpg 480w, /img/productos_liquid_sound_medium.jpg 768w, /img/productos_liquid_sound_large.jpg 1280w"
            }
            className={styles.image}
            sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
            alt="Familia de productos de Liquid Sound"
          />

          <Box 
            component="section" 
            className={styles.text}
            sx={{
              backgroundColor: theme.palette.primary.main,
              padding: "24px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ textAlign: "center", color: theme.palette.common.white }}
            >
              Nuestros productos
            </Typography>
            <Typography component="ul" className={styles.list}>
              <Typography component="li" className={styles.listItem}><strong>Desinfección de instrumental médico:</strong> Garantiza la esterilidad en quirófanos y clínicas.</Typography>
              <Typography component="li" className={styles.listItem}><strong>Detergentes enzimáticos:</strong> Limpieza profunda para instrumental médico y quirúrgico.</Typography>
              <Typography component="li" className={styles.listItem}><strong>Espuma para tatuajes:</strong> Producto especializado para el cuidado y desinfección en body art.</Typography>
              <Typography component="li" className={styles.listItem}><strong>Jabones y alcohol en gel:</strong> Higiene de manos certificada para entornos críticos.</Typography>
              <Typography component="li" className={styles.listItem}><strong>Guantes de látex y barbijos:</strong> Protección desechable en entornos estériles.</Typography>
            </Typography>
            <Box 
              sx={{ 
                display: "flex",
                flexDirection: { xs: "column", sm: "row"}, 
                gap: 2, 
                pt: { xs: 3, lg: 3  },
                pl: { lg: 2 },
                justifyContent: { sm: "center", md: "flex-start" }
              }}>
              <Button variant="contained" component="a" href="https://www.liquidsound.com.ar/" target="_blank" rel="noopener noreferrer">Ir a la tienda</Button>
              <Button variant="text" href="#contacto" sx={{ color: theme.palette.common.white}}>Pedir cotización</Button>
            </Box>
          </Box>
        </Box>
        
      </Container> */}
    </>
  )
}