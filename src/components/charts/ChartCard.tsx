import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface ChartCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  icon,
  children,
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Box sx={{ color: "#1E3A8A", display: "flex" }}>{icon}</Box>
        <Typography variant="subtitle1" fontWeight={700} color="#0F172A">
          {title}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {children}
      </Box>
    </Paper>
  );
};
