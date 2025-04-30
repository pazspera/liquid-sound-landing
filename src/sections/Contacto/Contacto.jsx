import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Contacto() {
  const theme = useTheme();

  return (
    <>
      <Box id="contacto"
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: theme.layout.sectionPadding
        }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom 
            sx={{
              color: theme.palette.text.white,
              padding: theme.layout.titlePadding,
            }}
           >Contacto</Typography>
          <ContactForm></ContactForm>
        </Container>
      </Box>
    </>
  )
}