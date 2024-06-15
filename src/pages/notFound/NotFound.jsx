
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

function NotFound() {
    const theme = useTheme()
    return (
        <Box>
        <Typography align="center" color={theme.palette.error.main} variant="h1">
          There is no design yet
          <br />
          <br />
          Please try again later..
        </Typography>
      </Box>
    )
}

export default NotFound
