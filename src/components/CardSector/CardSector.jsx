import { useTheme } from "@mui/material/styles";
import { Grid, Box, CardMedia, Typography } from "@mui/material";

export default function CardSector({card}) {
  const theme = useTheme();

  return (
    <>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "center" },
            backgroundColor: theme.palette.custom.grayLight,
            py: { xs: 3 },
            px: { xs: 2, lg: 5 },
            boxShadow: 1,
            height: "100%",
            justifyContent: { lg: "space-between" }
          }}
        >
          <CardMedia 
            component="img"
            src={card.imgSrc}
            alt={card.imgAlt}
            sx={{
              maxWidth: { xs: "72px" }
            }}
          />
          <Box 
            sx={{
              display: { lg: "flex" },
              flexDirection: { lg: "column" },
              maxWidth: "240px",
            }}
          >
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ 
                color: theme.palette.text.secondary, 
                margin: "8px 0",
                textAlign: "center"
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: { xs: "center" }
              }}
            >
              {card.text}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  )
}