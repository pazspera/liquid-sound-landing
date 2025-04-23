import styles from "./Contacto.module.css";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Contacto() {

  return (
    <>
      <Container maxWidth="xl" className={styles.contactContainer} sx={{ display: "block" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>Contacto</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ border: '1px solid', p: 2 }}>
            <p>Contacto</p>
          </Grid>
          <Grid item xs={12} md={6} sx={{ border: '1px solid', p: 2 }}>
            <p>Contacto</p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}