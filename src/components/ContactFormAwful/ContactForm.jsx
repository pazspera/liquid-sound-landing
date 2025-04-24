import styles from "./ContactForm.module.css";
import { Grid, TextField, Button, Box } from "@mui/material";

export default function ContactForm() {

  return (
    <>

      <Box
        component="form"
        sx={{
          width: "100%",
          boxSizing: "border-box",         // clave para que el padding no sume ancho
          px: 2,                            // 16px padding a cada lado
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth label="Nombre" variant="filled" required />
        <Button fullWidth variant="contained" size="large" type="submit">
          Enviar
        </Button>
      </Box>


      {/* <form>
        <Grid container rowSpacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Nombre"
              variant="filled"
              type="text"
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form> */}

      {/* <Box
        component="form"
        sx={{
          width: "100%",
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minWidth: 0
        }}
      >
        <TextField
          label="Nombre"
          variant="filled"
          type="text"
          fullWidth
          required
          sx={{ minWidth: 0 }}
        />

        <TextField
          label="Empresa"
          variant="filled"
          type="text"
          fullWidth
          sx={{ minWidth: 0 }}
        />

        <TextField
          label="Telefono"
          variant="filled"
          type="tel"
          fullWidth
          required
          sx={{ minWidth: 0 }}
        />

        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          fullWidth
          sx={{ minWidth: 0 }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          sx={{ maxWidth: "600px", marginTop: "2rem" }}
        >
          Enviar
        </Button>
      </Box> */}

    </>
  )
}