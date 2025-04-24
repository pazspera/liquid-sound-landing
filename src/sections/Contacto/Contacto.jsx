import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Contacto() {

  return (
    <>
      <Box className={styles.contactContainer}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center">Contacto</Typography>
          <ContactForm></ContactForm>
        </Container>
      </Box>
    </>
  )
}