import { Box, Paper, Typography, useTheme } from "@mui/material";
import PieChart from "../pie-chart/PieChart";
import BarChart from "../bar-chart/BarChart";
import GeograficChart from "../geograghy-chart/GeograficChart";

function Row3() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1,
        mt: 1.5,
      }}
    >
      <Paper sx={{ width: "28%", flexGrow: 1, minWidth: "500px" }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            padding: "30px 30px 0 30px",
            fontWeight: 600,
          }}
        >
          compaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography
          variant="h6"
          sx={{
            mt: "15px",
            textAlign: "center",
          }}
        >
          $48,352 revenue generated
        </Typography>
        <Typography
          variant="body1"
          sx={{
            pb: 3,
            textAlign: "center",
          }}
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", flexGrow: 1, minWidth: "500px" }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            padding: "30px 30px 0 30px",
            fontWeight: 600,
          }}
        >
          sales quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%", flexGrow: 1, minWidth: "500px" }}>
        <GeograficChart isDashboard={true} />
      </Paper>
    </Box>
  );
}

export default Row3;
