import styles from "./ProductosSector.module.css";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography, Box } from "@mui/material";
import CardSector from "../../components/CardSector/CardSector";

export default function ProductosSector() {
  const theme = useTheme();

  const cards = [
    {
      id: 1,
      title: "Medicina y laboratorios",
      text: "Cumplimos con normativas sanitarias para garantizar la asepsia en clínicas, hospitales y laboratorios.",
      imgSrc: "/img/medicina-laboratorios.svg",
      imgAlt: "Ilustración de un hospital"
    },
    {
      id: 2,
      title: "Gastronomía y alimenticia",
      text: "Desinfección efectiva para eliminar riesgos en la producción y manipulación de alimentos.",
      imgSrc: "/img/gastronomia-alimenticia.svg",
      imgAlt: "Ilustración de una tabla de picar con vegetales"
    },
    {
      id: 3,
      title: "Cosmética y manicuría",
      text: "Soluciones de limpieza adaptadas para preservar la calidad en entornos estéticos y de cuidado personal.",
      imgSrc: "/img/cosmetica-manicuria.svg",
      imgAlt: "Ilustración de artículos de cuidado personal"
    },
    {
      id: 4,
      title: "Tattoo y body art",
      text: "Productos diseñados para prevenir infecciones y mantener un entorno seguro para artistas y clientes",
      imgSrc: "/img/tatoo-body-art.svg",
      imgAlt: "Ilustración de un brazo siendo tatuado"
    }
  ]

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
            {cards.map((card)=>(
              <CardSector card={card} key={card.id} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}