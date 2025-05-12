import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const theme = useTheme();
  const navigate = useNavigate();

  console.log(errors);

  const googleSheetEndpoint = "https://script.google.com/macros/s/AKfycbxBgFCoa5PhCLVFiNYs-g8MV25ZdFrz81xCv52SfU2GfpHIH321geYyi2xPJd8EIi8yGw/exec";
  const emailEndpoint = "/.netlify/functions/contact";

  const sendToGoogleSheet = (formEl) => {
    const formData = new FormData(formEl);
    const checked = formEl.querySelector('[name="newsletter"]').checked;
    formData.set("newsletter", checked ? "Sí" : "No");
    formData.set("fecha", new Date().toLocaleDateString());

    fetch(googleSheetEndpoint, {
      method: "POST",
      body: formData
    })
      .catch((err) => {
        console.log("Sheet Error:", err);
      } )
  }

  const sendEmail = async (data) => {
    const res = await fetch(emailEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    
    if(!res.ok) {
      const text = await res.text();
      throw new Error(`Error al enviar correo: ${res.status}: ${text}`)
    }
    
    return res.json();
  }

  const handleForm = async (data, event) => {
    event.preventDefault();

    sendToGoogleSheet(event.target);

    const fecha = new Date().toLocaleDateString();
    const emailData = { ...data, fecha };

    try {
      await sendEmail(emailData);
      navigate("/gracias-por-contactarnos");
    } catch (err) {
      console.log("Error mandando mail",err);
    }

/*     try {
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
    } */

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
              sx={{ backgroundColor: theme.palette.common.white}}
            />
            {errors.nombre && (
              <ErrorMessage message={errors.nombre.message}/>
            )}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Empresa" 
              type="text" 
              fullWidth
              {...register("empresa")}
              sx={{ backgroundColor: theme.palette.common.white}} 
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
            <TextField 
              variant="filled" 
              label="Teléfono" 
              type="tel" 
              required 
              fullWidth 
              sx={{ backgroundColor: theme.palette.common.white}}
              {...register("telefono", { 
                required: "El campo es obligatorio", 
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ingrese solamente números en este campo"
                },
                minLength: { 
                  value: 8,
                  message: "El teléfono debe tener al menos 8 números"
                }
              })} 
            />
            {errors.telefono && (
              <ErrorMessage message={errors.telefono.message} />
            )}
          </Grid>
          <Grid item size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Email" 
              type="email" 
              required 
              fullWidth
              sx={{ backgroundColor: theme.palette.common.white}} 
              {...register("email", {
                required: "El campo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato de email inválido"
                }
              })}
            />
            {errors.email && (
              <ErrorMessage message={errors.email.message} />
            )}
          </Grid>
          <Grid item size={{ xs: 12, lg: 11 }} offset={{ lg: 1 }}>
            <FormControlLabel 
              control={
                <Checkbox 
                  sx={{
                    color: theme.palette.common.white,
                    '&.Mui-checked': {
                      color: theme.palette.secondary.main,
                    }
                  }}
                />
              } 
              label="Suscribirme al newsletter" 
              {...register("newsletter")}
              sx={{
                color: theme.palette.common.white,
                '&.Mui-checked': {
                  color: theme.palette.common.white,
                }
              }}
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