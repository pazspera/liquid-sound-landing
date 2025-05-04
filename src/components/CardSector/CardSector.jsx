import { useTheme } from "@mui/material/styles";
import { Grid, Box, CardMedia, Typography } from "@mui/material";
import useAos from "../../hooks/useAos";

export default function CardSector({card}) {
  const theme = useTheme();
  const isDesktop = useAos();

  return (
    <>
      <Grid size={{ xs: 12,
         sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "center" },
            backgroundColor: theme.palette.custom.grayLight,
            py: { xs: 2, xl: 3 },
            px: { xs: 2, xl: 3 },
            boxShadow: 1,
            height: "100%",
            justifyContent: { lg: "space-between" },
          }}
          data-aos={isDesktop ? "fade-up" : undefined}
          data-aos-delay={isDesktop ? card.animationDelay : undefined}
        >
          <CardMedia 
            component="img"
            src={card.imgSrc}
            alt={card.imgAlt}
            sx={{
              maxWidth: { xs: "72px", lg: "80px" }
            }}
          />
          <Box 
            sx={{
              display: { lg: "flex" },
              flexDirection: { lg: "column" },
              maxWidth: { xs: "240px", md: "85%", lg: "72%" },
            }}
          >
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ 
                color: theme.palette.text.secondary, 
                margin: "8px 0",
                textAlign: { xs: "center", lg: "start" }
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: { xs: "center", lg: "start" }
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