import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, CardMedia } from "@mui/material";


export default function CardHighlight({card}) {
  const theme = useTheme();

  return (
    <>
      <Grid
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        offset={{ md: card.lastCard ? 3 : 0, lg: 0 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "0 12px",
          marginBottom: { xs: "36px", lg: "0" }
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "350px",
          width: "100%",  
        }}>
          <CardMedia 
            component="img"
            src={card.imgSrc} 
            alt={card.imgAlt} 
            sx={{ maxWidth: { xs: "96px", lg: "120px" }}}
          />
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ color: theme.palette.text.secondary, marginTop: "8px", marginBottom: "8px", textAlign: "center" }}
          >
            {card.title}
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="body2"
            component="p"
          >
            {card.text}
          </Typography>
        </Box>
      </Grid>
    </>
  )
}