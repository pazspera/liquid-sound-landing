import { Grid, TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data)=> {
        console.log(data)
      })}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
            <TextField 
              variant="filled" 
              label="Nombre" 
              type="text" 
              required
              fullWidth 
              {...register("nombre")} 
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Empresa" 
              type="text" 
              fullWidth
              {...register("empresa")} 
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
            <TextField 
              variant="filled" 
              label="Teléfono" 
              type="tel" 
              required 
              fullWidth 
              {...register("telefono")} 
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Email" 
              type="email" 
              required 
              fullWidth 
              {...register("email")}
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 11 }} offset={{ lg: 1 }}>
            <FormControlLabel 
              control={<Checkbox />} 
              label="Suscribirme al newsletter" 
              {...register("newsletter")}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 10, lg: 6 }} offset={{ xs: 0, md: 1, lg: 3 }}>
            <Button variant="contained" type="submit" fullWidth>Enviar</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}