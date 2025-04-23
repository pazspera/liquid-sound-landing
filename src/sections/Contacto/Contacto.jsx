import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Contacto() {

  return (
    <>
      <Box sx={{ width: "100vw", backgroundColor: "blue" }}>
        <Container maxWidth="xl" className={styles.contactContainer} sx={{ px: { xs: 2, md: 0 } }}>
          <Box>
            <Typography variant="h3" component="h2" align="center" gutterBottom>Contacto</Typography>
          </Box>
          <ContactForm></ContactForm>
        </Container>
      </Box>
    </>
  )
}