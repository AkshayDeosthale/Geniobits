import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TaskChip = () => {
  return (
    <Paper
      sx={{
        borderRadius: "10px",

        padding: "15px 95px 15px 15px",
      }}
      elevation={3}
    >
      <Typography>Number</Typography>
      <Typography>Task</Typography>
    </Paper>
  );
};

export default TaskChip;
