import styles from "./NuestrosClientes.module.css";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function NuestrosClientes() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl" sx={{ py: theme.layout.sectionPadding }}>
        <Grid container>
          <Grid size={{ xs: 12}}>
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
              Nuestros clientes
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
              <Splide
                options={{
                  type: "loop",
                  perMove: 1,
                  perPage: 4,
                  pagination: false,
                  drag: true,
                  snap: true,
                  arrows: false,
                  interval: 3000,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  autoStart: true,
                  autoScroll: {
                    speed: 1,
                  },
                }}
              >
                <SplideSlide>
                  <img src="/img/slider-nestle.jpg" alt="Nestle" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-diagnostico-maipu.jpg" alt="Diagnóstico Maipu" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-lab-medicina.jpg" alt="Lab Medicina" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-casara.jpg" alt="Casará" />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-pelo-mania.jpg" alt="Pelo mania" />
                </SplideSlide>
              </Splide>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}