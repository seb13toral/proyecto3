import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { MonthlyTempData } from "../../types/weather.types";

interface TemperatureLineChartProps {
  data: MonthlyTempData[];
}

export const TemperatureLineChart: React.FC<TemperatureLineChartProps> = ({
  data,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const width = 520;
  const height = 210;
  const padLeft = 36;
  const padRight = 16;
  const padTop = 16;
  const padBottom = 28;
  const maxVal = 40;

  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const getX = (index: number) =>
    padLeft + (index / Math.max(data.length - 1, 1)) * plotW;
  const getY = (val: number) => padTop + plotH - (val / maxVal) * plotH;

  const maxPoints = data.map((d, i) => `${getX(i)},${getY(d.maxTemp)}`).join(" ");
  const minPoints = data.map((d, i) => `${getX(i)},${getY(d.minTemp)}`).join(" ");

  const maxArea = `${padLeft},${padTop + plotH} ${maxPoints} ${getX(data.length - 1)},${padTop + plotH}`;
  const minArea = `${padLeft},${padTop + plotH} ${minPoints} ${getX(data.length - 1)},${padTop + plotH}`;

  return (
    <Box>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="auto">
          {[0, 10, 20, 30, 40].map((tick) => (
            <g key={tick}>
              <line
                x1={padLeft}
                y1={getY(tick)}
                x2={width - padRight}
                y2={getY(tick)}
                stroke="#F1F5F9"
                strokeWidth="1"
              />
              <text
                x={padLeft - 8}
                y={getY(tick) + 4}
                textAnchor="end"
                fontSize="10"
                fill="#94A3B8"
              >
                {tick}
              </text>
            </g>
          ))}

          <polygon points={maxArea} fill="rgba(30, 58, 138, 0.12)" />
          <polygon points={minArea} fill="rgba(220, 38, 38, 0.12)" />

          <polyline
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="2.5"
            points={maxPoints}
          />
          <polyline
            fill="none"
            stroke="#DC2626"
            strokeWidth="2.5"
            points={minPoints}
          />

          {data.map((d, i) => {
            const label = isMobile
              ? String(i + 1).padStart(2, "0")
              : d.period;
            return (
              <g key={d.period}>
                <circle
                  cx={getX(i)}
                  cy={getY(d.maxTemp)}
                  r="3.5"
                  fill="#FFFFFF"
                  stroke="#1E3A8A"
                  strokeWidth="2"
                />
                <circle
                  cx={getX(i)}
                  cy={getY(d.minTemp)}
                  r="3.5"
                  fill="#FFFFFF"
                  stroke="#DC2626"
                  strokeWidth="2"
                />
                <text
                  x={getX(i)}
                  y={height - 8}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#64748B"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </Box>

      <Stack direction="row" spacing={3} sx={{ mt: 1, pl: 2 }}>
        <Stack direction="row" alignItems="center" spacing={0.8}>
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#1E3A8A" }} />
          <Typography variant="caption" color="#475569">
            Temp. máxima
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.8}>
          <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#DC2626" }} />
          <Typography variant="caption" color="#475569">
            Temp. mínima
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
