import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{
        minHeight: 0,
        padding: 1,
        backgroundColor: "gray",
        borderRadius: "10px",
        ".Mui-selected": {
          border: "none",
          backgroundColor: "white",
        },
      }}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Tab
        icon={<FormatListBulletedIcon />}
        iconPosition="start"
        label="All"
        sx={{
          borderRadius: "8px",
          minHeight: 0,
          margin: 0,
          px: 6,
          py: 0,
        }}
      />
      <Tab
        icon={<FormatListNumberedIcon />}
        iconPosition="start"
        label="My Task"
        sx={{
          borderRadius: "8px",
          minHeight: 0,
          margin: 0,
          px: 6,
          py: 0,
        }}
      />
    </Tabs>
  );
}
