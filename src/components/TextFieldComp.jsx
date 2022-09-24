import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";
import TablePaginationDemo from "./TablePagination";

const TextFieldComp = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "100%", marginTop: 2 }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-password"
        hiddenLabel
        variant="filled"
        value={values.password}
        onChange={handleChange("password")}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <TablePaginationDemo />
          </InputAdornment>
        }
        placeholder="Search Tasks"
        sx={{
          borderRadius: "100px",
        }}
      />
    </FormControl>
  );
};

export default TextFieldComp;
