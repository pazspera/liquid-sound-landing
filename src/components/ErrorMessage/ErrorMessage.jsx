import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useTheme } from "@mui/material/styles";

export default function ErrorMessage({message}) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", color: theme.palette.warning.main, padding: theme.layout.errorPadding }}>
        <WarningAmberIcon sx={{ fontSize: 20, mr: 0.5}} />                   <Typography variant="body2" color="warning">                        {message}
        </Typography>
      </Box>
    </>
  )
}