import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, CardMedia } from "@mui/material";
import useAos from "../../hooks/useAos";

export default function CardHighlight({card}) {
  const theme = useTheme();
  const isDesktop = useAos();

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
        data-aos={isDesktop ? "fade-up" : undefined}
        data-aos-delay={isDesktop ? card.animationDelay : undefined}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: { xs:"350px" , lg:"400px" },
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
            sx={{ 
              textAlign: "center",
              fontSize: {
                xs: theme.typography.body2.fontSize,
                lg: theme.typography.body1.fontSize,
              }
             }}
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