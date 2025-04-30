import { useTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

export default function  PorQueElegirnos() {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="lg" sx={{ py: theme.layout.sectionPadding }}>
        <Grid container>
          <Grid></Grid>
        </Grid>
      </Container>
    </>
  )
}