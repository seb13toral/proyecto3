import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface KpiCardProps {
  title: string;
  value: number | string;
  unit: string;
  icon: React.ReactNode;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  unit,
  icon,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 3.5,
        border: "1px solid #E2E8F0",
        bgcolor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          bgcolor: "#EEF2FF",
          color: "#1E3A8A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" color="#64748B" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight={700} color="#0F172A">
          {value} {unit}
        </Typography>
      </Box>
    </Paper>
  );
};
