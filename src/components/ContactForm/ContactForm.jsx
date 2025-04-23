import styles from "./ContactForm.module.css";
import { Grid, TextField, Button } from "@mui/material";

export default function ContactForm() {

  return (
    <>
      <form>
        {/* spacing genera scroll horizontal en mobile */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 0, md: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField 
              label="Nombre"
              variant="filled"
              type="text"
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              label="Telefono"
              variant="filled"
              type="tel"
              required            
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Empresa"
              variant="filled"
              type="text"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              label="Email"
              variant="filled"
              type="email"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              variant="contained" 
              type="submit" 
              size="large"
              fullWidth
            >
                Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}