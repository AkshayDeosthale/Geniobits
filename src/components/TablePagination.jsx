import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(0);

  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Typography>{`${page} - 10 of 50`}</Typography>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
