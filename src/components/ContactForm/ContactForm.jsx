import styles from "./ContactForm.module.css";
import { Grid, TextField, Button, Box } from "@mui/material";

export default function ContactForm() {

  return (
    <>
      <form>
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          <TextField
            label="Nombre"
            variant="filled"
            type="text"
            fullWidth
            required
          />

          <TextField
            label="Telefono"
            variant="filled"
            type="tel"
            fullWidth
            required
          />

          <TextField
            label="Empresa"
            variant="filled"
            type="text"
            fullWidth
          />

          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            fullWidth
          />
        </Box>

        <Box>
          <Button
            variant="contained"
            type="submit"
            size="large"
            fullWidth
          >
            Enviar
          </Button>
        </Box>

      </form>
    </>
  )
}