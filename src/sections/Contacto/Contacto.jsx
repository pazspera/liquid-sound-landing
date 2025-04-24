import styles from "./Contacto.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Contacto() {

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center">Contact</Typography>
      </Container>
    </>
  )
}