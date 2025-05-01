import { useTheme } from "@mui/material/styles";
import { Grid, Box, CardMedia, Typography } from "@mui/material";

export default function CardSector({card}) {
  const theme = useTheme();

  return (
    <>
      <Grid>
        <Box>
          <CardMedia 
            component="img"
            src={card.imgSrc}
            alt={card.imgAlt}
          />
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
            sx={{ color: theme.palette.text.secondary, margin: "8px 0" }}
          >
            {card.title}
          </Typography>
          <Typography
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