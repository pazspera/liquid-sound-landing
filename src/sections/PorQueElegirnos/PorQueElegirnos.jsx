import { useTheme } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import CardHighlight from "../../components/CardHighlight/CardHighlight";

export default function  PorQueElegirnos() {
  const theme = useTheme();

  const cards = [
    {
      id: 1,
      title: "Reducción de costos operativos",
      text: "Nuestros productos ayudan a reducir costos operativos al minimizar desperdicios y optimizar el uso de recursos en procesos de limpieza.",
      imgSrc: "/img/reduccion-costos.svg",
      imgAlt: "Mano depositando monedas en un frasco"
    },
    {
      id: 2,
      title: "Flexibilidad en pedidos",
      text: "Adaptamos pedidos a las necesidades específicas de cada cliente, permitiendo soluciones personalizadas que se ajustan a demandas variables del mercado.",
      imgSrc: "/img/flexibilidad-pedidos.svg",
      imgAlt: "Carrito transportando paquetes"
    },
    {
      id: 3,
      title: "Cumplimiento normativo estricto",
      text: "Garantizamos el cumplimiento de normativas vigentes, proporcionando productos que facilitan auditorías y reducen riesgos operativos en entornos altamente regulados.",
      imgSrc: "/img/cumplimiento-normativo.svg",
      imgAlt: "Documento con sello de aprobación"
    }
  ]

  return (
    <>
      <Container maxWidth="lg" sx={{ py: theme.layout.sectionPadding }}>
        <Grid container>
          <Grid item size={{ xs: 12 }}>
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
              ¿Por qué elegirnos?
            </Typography>
          </Grid>
          {cards.map((card)=> (
            <CardHighlight card={card} key={card.id} />
          ))}      
        </Grid>
      </Container>
    </>
  )
}