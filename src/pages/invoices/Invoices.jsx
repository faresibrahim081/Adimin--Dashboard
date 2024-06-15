import { Box } from "@mui/material";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../components/Header";

function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={'INVOICES'} subTitle={"List of Invoice Balances"} />
      <DataGrid
      checkboxSelection
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  )
}

export default Invoices
