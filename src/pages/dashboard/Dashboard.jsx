import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

function Dashboard() {

  return (
    <Box>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Header title={'dashboard'} subTitle={"Welcome to your dashboard"} />
          <Box sx={{textAlign:'right', mb: 1.5}}>
            <Button variant="contained" color="primary">
              <DownloadOutlined />
              Download Reports
            </Button>
          </Box>
        </Stack>
        <Row1 />
        <Row2 />
        <Row3 />
    </Box>

  );
}

export default Dashboard;
