import { Grid, TextField, Checkbox, FormControlLabel, Button, Typography, Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);


  const googleSheetEndpoint = import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT;
  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
  

  const sendToGoogleSheet = async (formData) => {

    const res = await fetch(googleSheetEndpoint, {
      method: "POST",
      body: formData,
      redirect: "follow"
    })

    if(!res.ok) {
      const text = await res.text();
      throw new Error(`Error al enviar el correo:${res.status}: ${text}`)
    }

    return { success: true };
  }

  const sendEmail = async (dataToSend) => {

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        dataToSend,
        publicKey
      )
      
      if(res.status !== 200) {
        throw new Error(`Error al enviar correo: ${res.status}: ${res.text}`)
      }
      
      return { success: true };
    } catch (error) {
      throw new Error(`Error al enviar el correo: ${error.message || 'Error desconocido' }`)
    }
  }

  const handleForm = async (data, event) => {
    event.preventDefault();
    setLoading(true);
    setSendError(false);

    const fechaActual = new Date().toLocaleDateString();
    const newsletterValue = data.newsletter ? "Sí" : "No";
    const empresaValue = (data.empresa && data.empresa.trim() !== 0 )? data.empresa : "-";

    // emailJS requiere un objeto, google sheet formdata
    // por eso hay que hacer cada uno por separado
    const emailJsData = { 
      user_name: data.nombre,
      user_email: data.email,
      telefono: data.telefono,
      fecha: fechaActual,
      newsletter: newsletterValue,
      empresa: empresaValue,
    };

    const formDataforSheet = new FormData(event.target);
    formDataforSheet.set("newsletter", newsletterValue);
    formDataforSheet.set("fecha", fechaActual);
    formDataforSheet.set("empresa", empresaValue);

    // Envío al GoogleSheet
    try {
      await sendToGoogleSheet(formDataforSheet);
    } catch (error) {
      setSendError(true);
      setLoading(false);
      return;
    }

    // Envío email
    try {
      await sendEmail(emailJsData);
      setLoading(false);
      navigate("/gracias-por-contactarnos");
    } catch (err) {
      setSendError(true);
      setLoading(false);
    }
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