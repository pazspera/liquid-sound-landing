import styles from "./ContactForm.module.css";
import { Grid, TextField, Button } from "@mui/material";

export default function ContactForm() {

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item>
            <TextField 
              label="Nombre"
              variant="filled"
              type="text"
              required
            />
          </Grid>

          <Grid item>
            <TextField 
              label="Telefono"
              variant="filled"
              type="tel"
              required            
            />
          </Grid>

          <Grid item>
            <TextField
              label="Empresa"
              variant="filled"
              type="text"
            />
          </Grid>

          <Grid item>
            <TextField 
              label="Email"
              variant="filled"
              type="email"
              required
            />
          </Grid>

          <Grid item>
            <Button 
              variant="contained" 
              type="submit" 
              size="large"
              fullWidth>
                Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}