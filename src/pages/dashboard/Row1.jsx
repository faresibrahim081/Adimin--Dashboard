import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1,data2, data4, data3 } from "./data";

function Row1() {
    const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", ms:"space-between"}}
    >
      <Card
        icon={<Email sx={{color: theme.palette.secondary.main, fontSize:'23px'}} />}
        title={"5,345"}
        subTitle={"Emails Sent"}
        data={data1}
        increase={'+14%'}
        scheme={'nivo'}
      />
      <Card
        icon={<PointOfSale  sx={{color: theme.palette.secondary.main, fontSize:'23px'}}/>}
        title={"1,982,400"}
        subTitle={"Sales obtained"}
        data={data2}
        increase={'+34%'}
        scheme={'category10'}
      />
      <Card
        icon={<PersonAdd sx={{color: theme.palette.secondary.main, fontSize:'23px'}} />}
        title={"126,472"}
        subTitle={"new client"}
        data={data3}
        increase={'+47%'}
        scheme={'dark2'}
      />
      <Card
        icon={<Traffic sx={{color: theme.palette.secondary.main, fontSize:'23px'}} />}
        title={"255,000"}
        subTitle={"Traffic Received"}
        data={data4}
        increase={'+6%'}
        scheme={'accent'}
      />
    </Stack>
  );
}

export default Row1;
