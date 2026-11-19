import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import { StatusBadge } from "./StatusBadge";
import { PaginationControls } from "./PaginationControls";
import type { WeatherRecord } from "../../types/weather.types";

interface WeatherDataTableProps {
  records: WeatherRecord[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const WeatherDataTable: React.FC<WeatherDataTableProps> = ({
  records,
  totalCount,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 3.5,
        border: "1px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
        <TableChartOutlinedIcon sx={{ color: "#1E3A8A" }} />
        <Typography variant="subtitle1" fontWeight={700} color="#0F172A">
          Registros meteorológicos
        </Typography>
      </Box>

      <TableContainer sx={{ flex: 1, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "#EEF2FF" }}>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>Fecha</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>Localidad</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>MinTemp (°C)</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>MaxTemp (°C)</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>Rainfall (mm)</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>Humidity3pm (%)</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#1E3A8A" }}>RainToday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row) => (
              <TableRow key={`${row.Date}-${row.Location}`} hover>
                <TableCell>{row.Date}</TableCell>
                <TableCell>{row.Location}</TableCell>
                <TableCell>{row.MinTemp ?? "—"}</TableCell>
                <TableCell>{row.MaxTemp ?? "—"}</TableCell>
                <TableCell>{row.Rainfall?.toFixed(1) ?? "—"}</TableCell>
                <TableCell>{row.Humidity3pm ?? "—"}</TableCell>
                <TableCell>
                  <StatusBadge
                    hasRained={
                      row.RainToday === null ? null : row.RainToday === "Yes"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        shownCount={records.length}
        totalRecords={totalCount}
        onPageChange={onPageChange}
      />
    </Paper>
  );
};
