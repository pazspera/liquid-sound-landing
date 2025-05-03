import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function FooterSocialLinks() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ my: 2, display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
        <Box
          component="a"
          href="https://www.instagram.com/liquidsoundar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
        </Box>
        <Box
          component="a"
          href="https://www.facebook.com/LiquidSoundAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
        </Box>
        <Box
          component="a"
          href="https://www.twitter.com/LiquidSoundAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon sx={{ fontSize: 40, mr: 0.5, color: theme.palette.primary.main }} />
        </Box>
      </Box>
    </>
  )
}