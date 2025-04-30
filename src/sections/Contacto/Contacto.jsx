import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Contacto() {
  const theme = useTheme();

  return (
    <>
      <Box 
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: theme.layout.sectionPadding
        }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom 
            sx={{
              color: theme.palette.text.white
            }}
           >Contacto</Typography>
          <ContactForm></ContactForm>
        </Container>
      </Box>
    </>
  )
}