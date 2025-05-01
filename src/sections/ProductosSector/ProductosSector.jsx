import styles from "./ProductosSector.module.css";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, Box } from "@mui/material";

export default function ProductosSector() {
  const theme = useTheme();

  return (
    <>
      <Box className={styles.background}>
        <Container maxWidth="lg" sx={{ py: theme.layout.sectionPadding }}>
          <Grid container>
            <Grid size={{ xs: 12 }}>
              <Typography 
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  padding: theme.layout.titlePadding,
                  color: theme.palette.text.secondary,
                  textAlign: "center"
                }}
              >
                Productos diseñados para su sector
              </Typography>
              <Typography component="p" variant="body3" sx={{ textAlign: "center" }}>
                Adaptamos nuestras soluciones a los estándares de cada industria para garantizar espacios seguros y libres de contaminación.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}