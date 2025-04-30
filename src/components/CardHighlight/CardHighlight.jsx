import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";


export default function CardHighlight({card}) {
  const theme = useTheme();
  
  return (
    <>
      <Grid
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img src={card.imgSrc} alt={card.imgAlt} />
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{ color: theme.palette.text.secondary }}
        >
          {card.title}
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
        >
          {card.text}
        </Typography>
      </Grid>
    </>
  )
}