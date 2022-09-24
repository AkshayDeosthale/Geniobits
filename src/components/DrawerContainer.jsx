import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Badge } from "@mui/material";
import Content from "./Content";

import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(5),
    // backgroundColor: "grey",
    // height: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerContainer() {
  const [open, setOpen] = React.useState(true);
  const [selected, setselected] = React.useState("My App");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "none",
            padding: 2,
          }}
        >
          <BasicBreadcrumbs />
          <Box>
            <Badge color="secondary" variant="dot">
              <IconButton
                sx={{
                  backgroundColor: "silver",
                }}
              >
                <NotificationsNoneIcon />
              </IconButton>
            </Badge>

            <IconButton
              sx={{
                marginLeft: 3,
                backgroundColor: "silver",
              }}
            >
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "50px",
            }}
          >
            CAIT
          </Typography>
        </DrawerHeader>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          height="100%"
        >
          <List>
            {["My App", "Resources"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  borderLeft: selected === text && 7,
                  borderColor: "orange",
                }}
              >
                <ListItemButton onClick={() => setselected(text)}>
                  <ListItemIcon>
                    {text === "My App" ? <WidgetsIcon /> : <PeopleIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {["My Organization", "Setting", "Log out"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  borderLeft: selected === text && 7,
                  borderColor: "orange",
                }}
              >
                <ListItemButton onClick={() => setselected(text)}>
                  <ListItemIcon>
                    {text === "My Organization" ? (
                      <HomeIcon />
                    ) : text === "Setting" ? (
                      <SettingsIcon />
                    ) : (
                      <LogoutIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Content />
      </Main>
    </Box>
  );
}
