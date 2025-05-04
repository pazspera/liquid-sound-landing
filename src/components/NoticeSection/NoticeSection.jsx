import { useTheme } from "@mui/material/styles";
import { Paper, Grid, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function NoticeSection({title, message, secondaryMessage=""}) {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Paper elevation={3} sx={{ p: { xs: 4 }, backgroundColor: theme.palette.primary.main, color: theme.palette.common.white, maxWidth: { xs: "100%", md: "80vw", lg: "50vw" } }}>
          <Grid container rowSpacing={2}>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              <Typography variant="h3" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center", mb: 3 }}>
              <Typography variant="subtitle1" component="p">
                {message}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {secondaryMessage}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}> 
              <Button variant="contained" component={Link} to="/">Volver al inicio</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}