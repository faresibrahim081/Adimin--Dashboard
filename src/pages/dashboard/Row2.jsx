import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../line-chart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

function Row2() {
  const theme = useTheme();
  return (
    <Box>
      <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={1.5}>
        <Paper sx={{ maxWidth: 900,minWidth:400, flexGrow: 1 }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.secondary.main,
                  mb: 1,
                  mt: 2,
                  ml: 4,
                }}
              >
                revenue generated
              </Typography>
              <Typography variant="body2" ml={4}>
                $4,855,374
              </Typography>
            </Box>
            <Box>
              <IconButton sx={{ mr: 3 }}>
                <DownloadOutlined />
              </IconButton>
            </Box>
          </Stack>
          <LineChart isDashboard={true} />
        </Paper>
        <Box sx={{overflow:'auto', maxHeight: 380, minWidth: "250px", flexGrow: 1 }}>
          <Paper>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                p: 1.2,
                fontWeight: "bold",
              }}
            >
              recent Transaction
            </Typography>
          </Paper>
          {Transactions.map((item) => {
            return(
                <>
                <Paper
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                  }}
                >
                  <Box key={item.txId}>
                    <Typography variant="body1" fontWeight={600}>
                      {item.txId}
                    </Typography>
                    <Typography variant="body1">{item.user}</Typography>
                  </Box>
                  <Typography variant="body1" fontWeight={600}>
                    {item.date}
                  </Typography>
                  <Typography
                    variant="body1"
                    p={1}
                    borderRadius={2}
                    bgcolor={theme.palette.error.main}
                    color={'white'}
                  >
                    ${item.cost}
                  </Typography>
                </Paper>
                </>
            )
          })}
        </Box>
      </Stack>
    </Box>
  );
}

export default Row2;
