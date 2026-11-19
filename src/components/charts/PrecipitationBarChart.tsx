import React from "react";
import { Box, Typography } from "@mui/material";
import type { TopLocationData } from "../../types/weather.types";

interface PrecipitationBarChartProps {
  data: TopLocationData[];
}

const BAR_COLORS = ["#172554", "#1E3A8A", "#1D4ED8", "#3B82F6", "#93C5FD"];

export const PrecipitationBarChart: React.FC<PrecipitationBarChartProps> = ({
  data,
}) => {
  const maxVal = Math.max(...data.map((d) => d.totalRainfall), 1);

  return (
    <Box>
      <Typography variant="caption" color="#94A3B8" display="block" sx={{ mb: 1.5 }}>
        Lluvia (mm)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          height: 185,
          pt: 2,
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        {data.map((item, idx) => {
          const heightPct = Math.round((item.totalRainfall / maxVal) * 140);
          return (
            <Box
              key={item.location}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "18%",
              }}
            >
              <Typography
                variant="caption"
                fontWeight={600}
                color="#475569"
                sx={{ mb: 0.5 }}
              >
                {item.totalRainfall}
              </Typography>
              <Box
                sx={{
                  width: "80%",
                  height: `${heightPct}px`,
                  bgcolor: BAR_COLORS[idx % BAR_COLORS.length],
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  transition: "height 0.3s ease",
                }}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 1,
        }}
      >
        {data.map((item) => (
          <Typography
            key={item.location}
            variant="caption"
            color="#475569"
            sx={{ width: "18%", textAlign: "center" }}
          >
            {item.location}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
