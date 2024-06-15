import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100px",
              textAlign: "center",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-evenly",
              bgcolor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "admin" ? (
            <AdminPanelSettingsOutlined fontSize="small" sx={{color: 'white'}} />
            ) : access === "manager" ? (
            <SecurityOutlined fontSize="small" sx={{color: 'white'}} />
            ) : (
            <LockOpenOutlined fontSize="small" sx={{color: 'white'}} />
            )}
            <Typography sx={{ fontSize: "13px", color: 'white' }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
      <Box sx={{ height: 600, width: "98%", mx: 'auto' }}>
        <Header title={'team'} subTitle={"Managing the Team Members"} />
        <DataGrid rows={rows} columns={columns} />
      </Box>
  );
}

export default Team;
