import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);


  const googleSheetEndpoint = "https://script.google.com/macros/s/AKfycbxBgFCoa5PhCLVFiNYs-g8MV25ZdFrz81xCv52SfU2GfpHIH321geYyi2xPJd8EIi8yGw/exec";
  const emailEndpoint = "/.netlify/functions/contact";

  const sendToGoogleSheet = async (formEl) => {
    const formData = new FormData(formEl);
    const checked = formEl.querySelector('[name="newsletter"]').checked;
    formData.set("newsletter", checked ? "Sí" : "No");
    formData.set("fecha", new Date().toLocaleDateString());

    const res = await fetch(googleSheetEndpoint, {
      method: "POST",
      body: formData
    })

    if(!res.ok) {
      const text = await res.text();
      throw new Error(`Error al enviar el correo:${res.status}: ${text}`)
    }
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
    setLoading(true);
    setSendError(false);

    const fecha = new Date().toLocaleDateString();
    const emailData = { ...data, fecha };

    // Envío al GoogleSheet
    try {
      sendToGoogleSheet(event.target);
      setLoading(false);
      navigate("/gracias-por-contactarnos");
    } catch (error) {
      setSendError(true);
      setLoading(false);
      return;
    }

    // Envío email
    /* try {
      await sendEmail(emailData);
      setLoading(false);
      navigate("/gracias-por-contactarnos");
    } catch (err) {
      console.log("Error mandando mail",err);
      setSendError(true);
      setLoading(false);
    } */
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
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
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <TextField 
              variant="filled" 
              label="Empresa" 
              type="text" 
              fullWidth
              {...register("empresa")}
              sx={{ backgroundColor: theme.palette.common.white}} 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 5 }} offset={{ lg: 1 }}>
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
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
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
          <Grid size={{ xs: 12, lg: 11 }} offset={{ lg: 1 }}>
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
          <Grid size={{ xs: 12, md: 10, lg: 6 }} offset={{ xs: 0, md: 1, lg: 3 }}>
            <Button variant="contained" type="submit" fullWidth disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit"/> : "Enviar"}
            </Button>
          </Grid>
            {sendError && (
              <Grid size={{ xs: 12 }}>
                <Typography color="warning" align="center">
                  Ocurrió un error al enviar el formulario. Puede intentarlo nuevamente más tarde o contactarnos directamente por <Typography component="a" href="https://wa.me/5491156548438" target="_blank" rel="noopener noreferrer" color="warning">Whatsapp</Typography>.
                </Typography>
              </Grid>
            )}
        </Grid>
      </form>
    </>
  )
}