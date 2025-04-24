import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Contacto() {

  return (
    <>
      <Box sx={{ backgroundColor: "blue", overflowX: "hidden", py: 4 }}>
        <Container maxWidth="lg" className={styles.contactContainer} sx={{ px: 2 }}>
          <Box>
            <Typography variant="h3" component="h2" align="center" gutterBottom>Contacto</Typography>
          </Box>
          <ContactForm></ContactForm>
        </Container>
      </Box>
    </>
  )
}