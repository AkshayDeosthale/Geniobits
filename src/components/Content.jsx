import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TaskChip from "./TaskChip";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconTabs from "./FilterTabs";
import TextFieldComp from "./TextFieldComp";
import DataTable from "./GridList";
const Content = () => {
  const [value, setValue] = React.useState();

  return (
    <Grid container gap={2}>
      <Grid item container>
        {/* boxes */}
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 1,
            borderRadius: "10px",
            padding: 1,
          }}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="space-between"
            padding={1}
          >
            <Typography>Tasks</Typography>
            <Box display="flex" alignItems="center">
              <IconButton>
                <KeyboardArrowLeftIcon />
              </IconButton>
              <Typography>Date</Typography>
              <IconButton>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Grid>
          <Divider />
          <Grid item container padding={1}>
            <TaskChip />
          </Grid>
        </Grid>
        {/* button */}
        <Grid
          item
          xs={3}
          sx={{
            paddingLeft: 4,
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "orange",
              color: "white",
              width: "100%",
              ":hover": {
                backgroundColor: "orange",
                color: "white",
              },
            }}
          >
            {" "}
            + Add new Task{" "}
          </Button>
        </Grid>
      </Grid>
      <Grid item container justifyContent="flex-end" alignItems="center">
        <Typography>Sort By :</Typography>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "blue",
            color: "white",
            marginLeft: 5,
            paddingLeft: 6,
            ":hover": {
              backgroundColor: "blue",
              color: "white",
            },
          }}
          endIcon={<ArrowDropDownIcon />}
        >
          {" "}
          All{" "}
        </Button>
      </Grid>
      <Grid
        item
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          border: 1,
          borderRadius: "10px",
          padding: 2,
        }}
      >
        <Grid item container alignItems="center" justifyContent="space-between">
          <Typography>Task list</Typography>
          <IconTabs />
        </Grid>
        <Grid item container>
          <TextFieldComp />
        </Grid>
        <Grid item container>
          <DataTable />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
