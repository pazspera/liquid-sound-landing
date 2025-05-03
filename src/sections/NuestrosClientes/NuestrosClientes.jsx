import styles from "./NuestrosClientes.module.css";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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
          <Grid size={{ xs: 12}} sx={{ py: 3 }}>
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
                  autoStart: true,
                  autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                  },
                  breakpoints: {
                    300: {
                      perPage: 1
                    },
                    400: {
                      perPage: 1
                    }
                  }
                }}
                extensions={{AutoScroll}}
              >
                <SplideSlide>
                  <img src="/img/slider-nestle.jpg" alt="Nestle" className={styles.sliderLogo} />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-diagnostico-maipu.jpg" alt="Diagnóstico Maipu" className={styles.sliderLogo} />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-lab-medicina.jpg" alt="Lab Medicina" className={styles.sliderLogo} />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-casara.jpg" alt="Casará" className={styles.sliderLogo} />
                </SplideSlide>
                <SplideSlide>
                  <img src="/img/slider-pelo-mania.jpg" alt="Pelo mania" className={styles.sliderLogo} />
                </SplideSlide>
              </Splide>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}