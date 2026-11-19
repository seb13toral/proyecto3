import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface RainDistributionDonutProps {
  totalRecords: number;
  rainDays: { count: number; percentage: number };
  noRainDays: { count: number; percentage: number };
}

export const RainDistributionDonut: React.FC<RainDistributionDonutProps> = ({
  totalRecords,
  rainDays,
  noRainDays,
}) => {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const rainArc = (rainDays.percentage / 100) * circumference;

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Box sx={{ position: "relative", width: 160, height: 160 }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="#93C5FD"
            strokeWidth="22"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="#1E3A8A"
            strokeWidth="22"
            strokeDasharray={`${rainArc} ${circumference}`}
            transform="rotate(-90 80 80)"
          />
        </svg>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="#64748B">
            Total
          </Typography>
          <Typography variant="subtitle1" fontWeight={700} color="#0F172A">
            {totalRecords.toLocaleString("en-US")}
          </Typography>
          <Typography variant="caption" color="#64748B">
            registros
          </Typography>
        </Box>
      </Box>

      <Stack spacing={2}>
        <Stack direction="row" spacing={1.2} alignItems="flex-start">
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: 0.8,
              bgcolor: "#1E3A8A",
              mt: 0.5,
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight={700} color="#0F172A">
              Con lluvia
            </Typography>
            <Typography variant="caption" color="#64748B">
              {rainDays.percentage.toFixed(1)} % ·{" "}
              {rainDays.count.toLocaleString("en-US")} registros
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1.2} alignItems="flex-start">
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: 0.8,
              bgcolor: "#93C5FD",
              mt: 0.5,
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight={700} color="#0F172A">
              Sin lluvia
            </Typography>
            <Typography variant="caption" color="#64748B">
              {noRainDays.percentage.toFixed(1)} % ·{" "}
              {noRainDays.count.toLocaleString("en-US")} registros
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
