/* eslint-disable react/prop-types */
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import adminImg from "../images/1696904062913.png";
import { Avatar, styled, useTheme, Typography, Box, Tooltip } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleAltOutlined,
  Person2Outlined,
  PieChartOutline,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const array1 = [
  { text: "dashboard", icon: <HomeOutlined />, path: "/" },
  { text: "manage team", icon: <PeopleAltOutlined />, path: "/team" },
  {
    text: "contacts information",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
  { text: "invoices balances", icon: <ReceiptOutlined />, path: "/invoices" },
];

const array2 = [
  { text: "profile form", icon: <Person2Outlined />, path: "/form" },
  { text: "calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
  { text: "FAQ page", icon: <HelpOutlineOutlined />, path: "/faq" },
];
const array3 = [
  { text: "bar chart", icon: <BarChartOutlined />, path: "/bar" },
  { text: "pie chart", icon: <PieChartOutline />, path: "/pie" },
  { text: "line chart", icon: <TimelineOutlined />, path: "/line" },
  { text: "geography chart", icon: <MapOutlined />, path: "/geography" },
];

function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    // sx={{fontWeight:'bolder'}}
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box>
        <Avatar
          alt="Remy Sharp"
          src={adminImg}
          sx={{
            mx: "auto",
            my: 1,
            width: open ? 88 : 44,
            height: open ? 88 : 44,
            border: "2px solid grey",
            transition: "0.3s",
          }}
        />
        <Typography
          align="center"
          sx={{ fontSize: open ? 17 : 0, transition: "0.3s" }}
        >
          steve jobs
        </Typography>
        <Typography
          align="center"
          sx={{
            color: theme.palette.info.main,
            fontSize: open ? 15 : 0,
            transition: "0.3s",
          }}
        >
          admin
        </Typography>
      </Box>
      <Divider />
      <List>
        {array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[700]
                      : grey[400]
                    : null,
              }}
            >
              <Tooltip title={open ? null : item.text} placement="right-start" arrow>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[700]
                      : grey[400]
                    : null,
              }}
            >
              <Tooltip title={open ? null : item.text} placement="right-start" arrow>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          
        ))}
      </List>
      <Divider />
      <List>
        {array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[700]
                      : grey[400]
                    : null,
              }}
            >
              <Tooltip title={open ? null : item.text} placement="right-start" arrow>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
