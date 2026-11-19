import React from "react";
import { Grid } from "@mui/material";
import { LocationFilter } from "./LocationFilter";
import { DateRangeFilter } from "./DateRangeFilter";
import type { DateRange } from "../../types/weather.types";

interface FilterBarProps {
  locations: string[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  dateRange: DateRange;
  minDate: string;
  maxDate: string;
  onDateChange: (range: DateRange) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
  dateRange,
  minDate,
  maxDate,
  onDateChange,
}) => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <LocationFilter
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <DateRangeFilter
          dateRange={dateRange}
          minDate={minDate}
          maxDate={maxDate}
          onDateChange={onDateChange}
        />
      </Grid>
    </Grid>
  );
};