import { Box, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsappWidget() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 2000,
      }}
    >
      <Fab
        color="success"
        aria-label="WhatsApp"
        href="https://wa.me/5491156548438" 
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#25D366", 
          "&:hover": {
            backgroundColor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "white", fontSize: "40px" }} />
      </Fab>
    </Box>
  );
}
