import React from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import type { DateRange } from "../../types/weather.types";

interface DateRangeFilterProps {
  dateRange: DateRange;
  minDate: string;
  maxDate: string;
  onDateChange: (range: DateRange) => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  dateRange,
  minDate,
  maxDate,
  onDateChange,
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
      <CalendarTodayOutlinedIcon sx={{ color: "#1E3A8A", fontSize: 20 }} />
      <Typography
        variant="body2"
        fontWeight={600}
        color="#334155"
        sx={{ whiteSpace: "nowrap" }}
      >
        Rango de fechas
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
        <TextField
          type="date"
          size="small"
          value={dateRange.startDate}
          inputProps={{ min: minDate, max: dateRange.endDate }}
          onChange={(e) =>
            onDateChange({ ...dateRange, startDate: e.target.value })
          }
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "#F8FAFC",
              fontSize: "0.82rem",
            },
          }}
        />
        <Typography variant="body2" color="#94A3B8" sx={{ display: { xs: "none", sm: "block" } }}>
          -
        </Typography>
        <TextField
          type="date"
          size="small"
          value={dateRange.endDate}
          inputProps={{ min: dateRange.startDate, max: maxDate }}
          onChange={(e) =>
            onDateChange({ ...dateRange, endDate: e.target.value })
          }
          sx={{
            flex: 1,
            display: { xs: "none", sm: "inline-flex" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "#F8FAFC",
              fontSize: "0.82rem",
            },
          }}
        />
      </Box>
    </Paper>
  );
};
