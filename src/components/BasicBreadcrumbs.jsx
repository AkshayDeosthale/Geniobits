import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          sx={{
            fontSize: "30px",
          }}
        >
          My App
        </Link>
        <Link
          underline="hover"
          color="cyan"
          sx={{
            fontSize: "30px",
          }}
        >
          Task
        </Link>
      </Breadcrumbs>
    </div>
  );
}
