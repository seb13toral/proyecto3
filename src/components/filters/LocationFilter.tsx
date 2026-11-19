import React from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface LocationFilterProps {
  locations: string[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export const LocationFilter: React.FC<LocationFilterProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.5,
        px: 2,
        borderRadius: 3,
        border: "1px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <LocationOnOutlinedIcon sx={{ color: "#1E3A8A", fontSize: 22 }} />
      <Typography
        variant="body2"
        fontWeight={600}
        color="#334155"
        sx={{ whiteSpace: "nowrap" }}
      >
        Localidad
      </Typography>
      <FormControl fullWidth size="small">
        <Select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          sx={{
            borderRadius: 2,
            bgcolor: "#F8FAFC",
            fontSize: "0.875rem",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E2E8F0",
            },
          }}
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};
