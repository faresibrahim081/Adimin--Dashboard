import { Box } from "@mui/material";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";

function Contacts() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={'CONTACTS'} subTitle={"List of Contacts for Future Reference"} />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}

export default Contacts;
