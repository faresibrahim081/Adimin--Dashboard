/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";

function Header({title, subTitle}) {
    const theme = useTheme();

    return (
        <>
        <Box mb={ 4}>
            <Typography
            sx={{ fontWeight: "bold", textTransform:'uppercase' }}
            variant="h5"
            color={theme.palette.info.light}
            >
            {title}
            </Typography>
            <Typography variant="body1">{subTitle}</Typography>
        </Box>
        </>
    );
}

export default Header;
