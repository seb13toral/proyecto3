import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  NavigationMenu,
  type NavSection,
} from "./components/layout/NavigationMenu";
import { DashboardHeader } from "./components/layout/DashboardHeader";
import { FilterBar } from "./components/filters/FilterBar";
import { KpiGrid } from "./components/kpis/KpiGrid";
import { ChartsGrid } from "./components/charts/ChartsGrid";
import { WeatherDataTable } from "./components/table/WeatherDataTable";
import {
  AVAILABLE_LOCATIONS,
  MOCK_SUMMARY_BY_LOCATION,
  MOCK_WEATHER_RECORDS,
  TOP_LOCATIONS_RAINFALL,
} from "./data/mockWeatherData";
import type { DateRange } from "./types/weather.types";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

const PAGE_SIZE = 5;

export function App() {
  // Estados principales del dashboard (useState)
  const [activeSection, setActiveSection] = useState<NavSection>("inicio");
  const [selectedLocation, setSelectedLocation] = useState<string>(
    "Todas las localidades"
  );
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: "2007-11-01",
    endDate: "2017-06-25",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleLocationChange = (newLocation: string) => {
    setSelectedLocation(newLocation);
    setCurrentPage(1);
  };

  // Datos dinámicos según la localidad seleccionada
  const currentSummary =
    MOCK_SUMMARY_BY_LOCATION[selectedLocation] ??
    MOCK_SUMMARY_BY_LOCATION["Todas las localidades"];

  const filteredRecords = MOCK_WEATHER_RECORDS.filter((rec) => {
    const matchLocation =
      selectedLocation === "Todas las localidades" ||
      rec.Location === selectedLocation;
    const matchDate =
      rec.Date >= dateRange.startDate && rec.Date <= dateRange.endDate;
    return matchLocation && matchDate;
  });

  const totalPages = Math.ceil(filteredRecords.length / PAGE_SIZE);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "#F8FAFC",
          pb: { xs: 10, md: 0 },
        }}
      >
        <NavigationMenu
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: { xs: 0, md: 3.5 },
            maxWidth: "100%",
            overflowX: "hidden",
          }}
        >
          <DashboardHeader
            title="Australia Weather Dashboard"
            subtitle="Análisis de condiciones meteorológicas en Australia"
            onToggleTheme={() => {}}
          />

          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <FilterBar
              locations={AVAILABLE_LOCATIONS}
              selectedLocation={selectedLocation}
              onLocationChange={handleLocationChange}
              dateRange={dateRange}
              minDate="2007-11-01"
              maxDate="2017-06-25"
              onDateChange={(newRange) => {
                setDateRange(newRange);
                setCurrentPage(1);
              }}
            />

            <KpiGrid
              avgMaxTemp={currentSummary.avgMaxTemp}
              totalRainfall={currentSummary.totalRainfall}
              rainPercentage={currentSummary.rainPercentage}
            />

            <ChartsGrid
              monthlyTemps={currentSummary.monthlyTemps}
              rainDistribution={currentSummary.rainDistribution}
              topLocations={TOP_LOCATIONS_RAINFALL}
              tableNode={
                <WeatherDataTable
                  records={paginatedRecords}
                  totalCount={filteredRecords.length}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              }
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
