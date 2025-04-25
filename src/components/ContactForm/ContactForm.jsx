import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

  console.log(errors);

  const handleForm = async (data) => {
    console.log(data);

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("resultado");
      console.log(result);
    } catch (error) {
      console.log("error");
      console.log(error);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
            <TextField 
              variant="filled" 
              label="Nombre" 
              type="text" 
              required
              fullWidth 
              {...register("nombre", { required: "El campo es obligatorio" })} 
            />
            {errors.nombre && (
              <Typography variant="body2" color="error">
                {errors.nombre.message}
              </Typography>
            )}
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
              {...register("telefono", { 
                required: "El campo es obligatorio", 
                minLength: { 
                  value: 8,
                  message: "El teléfono debe tener al menos 8 números"
                } 
              })} 
            />
            {errors.telefono && (
              <Typography variant="body2" color="error">
                {errors.telefono.message}
              </Typography>
            )}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Email" 
              type="email" 
              required 
              fullWidth 
              {...register("email", { required: "El campo es obligatorio" })}
            />
            {errors.email && (
              <Typography variant="body2" color="error">
                {errors.email.message}
              </Typography>
            )}
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