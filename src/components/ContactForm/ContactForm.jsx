import { Grid, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";

export default function ContactForm() {


  return (
    <>
      <form>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField variant="filled" label="Nombre" type="text" required fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField variant="filled" label="Empresa" type="text" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField variant="filled" label="Teléfono" type="tel" required fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField variant="filled" label="Email" type="email" required fullWidth />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControlLabel control={ <Checkbox /> } label="Suscribirme al newsletter" />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} offset={{ xs: 0, md: 1 }}>
            <Button variant="contained" fullWidth>Enviar</Button>
          </Grid> 
        </Grid>
      </form> 
    </>
  )
}