import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

const columns = [
  { field: "Task", headerName: "Task", width: 130 },
  { field: "Time", headerName: "Time", width: 130 },
  { field: "Date", headerName: "Date", width: 130 },
  { field: "Assigned By", headerName: "Assigned By", width: 130 },
  { field: "AssignedTo", headerName: "AssignedTo", width: 130 },
  { field: "user", headerName: "", width: 130 },
  { field: "Deadline", headerName: "Deadline", width: 130 },
  { field: "Status", headerName: "Status", width: 50 },
  { field: "Priority", headerName: "Priority", width: 90 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <Box
      sx={{
        marginTop: 4,
        width: "100%",
        height: "365px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        hideFooterPagination
        hideFooterSelectedRowCount
        hideFooter
        hideFooterRowCount
        sx={{
          border: "none",
        }}
      />
    </Box>
  );
}
